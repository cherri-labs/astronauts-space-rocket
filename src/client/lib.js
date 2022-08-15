import * as web3 from '@solana/web3.js';
import * as borsh from 'borsh';

import { getBalance, getAllAccounts } from './accounts';
import { ClientAccount, TransferRequest } from './schemes';
import { entrypoint } from './entrypoint';
import { ownerTokenAccountKey } from './admin';
import { programId, seed } from './conf';

/* returns instruction to create *
 * new account owned by `publicKey`*/
export async function createAccount(publicKey, connection) {
  const client = new ClientAccount({
    creation: Date.now(),
  });

  const data = borsh.serialize(ClientAccount.schema, client);

  const lamports =
    (await connection.getMinimumBalanceForRentExemption(data.length));

  const programAddress =
    await web3.PublicKey.findProgramAddress([publicKey.toBuffer(), seed], programId);
  const accountPubkey = programAddress[0];

  const createProgramAccount = await web3.SystemProgram.createAccountWithSeed({
    fromPubkey: publicKey,
    basePubkey: publicKey,
    seed: seed,
    newAccountPubkey: accountPubkey,
    lamports: lamports,
    space: data.length,
    programId: programId,
  });

  return createProgramAccount;
}

/* returns transaction to transfer amount to *
 * account owned by `publicKey`              */
export async function deposit(signerKey, publicKey, amount) {
  const programAddress =
    await web3.PublicKey.findProgramAddress([publicKey.toBuffer(), seed], programId);
  const accountPubkey = programAddress[0];

  const instruction = web3.SystemProgram.transfer({
    fromPubkey: signerKey,
    toPubkey: accountPubkey,
    lamports: amount,
  });

  /* create new transaction object */
  const transaction = new web3.Transaction().add(
    instruction
  );

  return transaction;
}

/* returns transaction to request withdrawal *
 * from account owned by `publicKey`           */
export async function requestWithdrawal(publicKey, amount) {
  const programAddress =
    await web3.PublicKey.findProgramAddress([publicKey.toBuffer(), seed], programId);
  const accountPubkey = programAddress[0];

  let withdrawalRequest = new TransferRequest({ amount: amount });
  let data = borsh.serialize(TransferRequest.schema, withdrawalRequest);
  const dataForTransaction = new Uint8Array([entrypoint.withdraw, ... data]);

  const instruction = new web3.TransactionInstruction({
    keys: [
      { pubkey: accountPubkey, isSigner: false, isWritable: true },
      { pubkey: publicKey, isSigner: true, isWritable: false },
    ],
    programId: programId,
    data: dataForTransaction,
  });

  /* create new transaction object */
  const transaction = new web3.Transaction().add(
    instruction
  );

  return transaction;
}

/* returns transaction to drain *
 * account owned by `publicKey`   */
export async function drainAccount(publicKey, amount, connection) {
  const programAddress =
    await web3.PublicKey.findProgramAddress([publicKey.toBuffer(), seed], programId);
  const accountPubkey = programAddress[0];

  const tokenAccountKey = ownerTokenAccountKey(connection, publicKey);

  let request = new TransferRequest({ amount: amount });
  let data = borsh.serialize(TransferRequest.schema, request);
  const dataForTransaction = new Uint8Array([entrypoint.drain, ... data]);

  const instruction = new web3.TransactionInstruction({
    keys: [
      { pubkey: accountPubkey, isSigner: false, isWritable: true },
      { pubkey: publicKey, isSigner: true, isWritable: false },
      { pubkey: tokenAccountKey, isSigner: false, isWritable: false },
    ],
    programId: programId,
    data: dataForTransaction,
  });

  /* create new transaction object */
  const transaction = new web3.Transaction().add(
    instruction
  );

  return transaction;
}

/* drain all accounts */
export async function drainAll(connection) {

}
