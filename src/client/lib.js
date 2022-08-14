import * as web3 from '@solana/web3.js';
import * as borsh from 'borsh';

import { getBalance, getAllAccounts } from './accounts';
import { ClientAccount, TransferRequest } from './schemes';
import { entrypoint } from './entrypoint';
import { ownerTokenAccountKey } from './admin';
import { programId, seed } from './conf';

/* returns instruction to create *
 * new account owned by `userKey`*/
export async function createAccount(userKey, connection) {
  const client = new ClientAccount({
    id: userKey.toBuffer(),
    balance: 0,
  });

  const data = borsh.serialize(ClientAccount.schema, client);

  const lamports =
    (await connection.getMinimumBalanceForRentExemption(data.length));

  const accountPubkey = await web3.PublicKey.createWithSeed(
    userKey,
    seed,
    programId
  );

  const createProgramAccount = await web3.SystemProgram.createAccountWithSeed({
    fromPubkey: userKey,
    basePubkey: userKey,
    seed: seed,
    newAccountPubkey: accountPubkey,
    lamports: lamports,
    space: data.length,
    programId: programId,
  });

  return createProgramAccount;
}

/* returns transaction to request withdrawal *
 * from account owned by `userKey`           */
export async function requestWithdrawal(publicKey, amount) {
  const accountPubkey = await web3.PublicKey.createWithSeed(
    publicKey,
    seed,
    programId
  );

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
 * account owned by `userKey`   */
export async function drainAccount(userKey, amount, connection) {
  const accountPubkey = await web3.PublicKey.createWithSeed(
    userKey,
    seed,
    programId
  );

  const tokenAccountKey = ownerTokenAccountKey(connection, userKey);

  let request = new TransferRequest({ amount: amount });
  let data = borsh.serialize(TransferRequest.schema, request);
  const dataForTransaction = new Uint8Array([entrypoint.drain, ... data]);

  const instruction = new web3.TransactionInstruction({
    keys: [
      { pubkey: accountPubkey, isSigner: false, isWritable: true },
      { pubkey: userKey, isSigner: true, isWritable: false },
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
