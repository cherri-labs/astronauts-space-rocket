import * as web3 from '@solana/web3.js';
import * as borsh from 'borsh';

import {
  getBalance,
  findProgramAddress
} from './accounts';
import { ClientAccount, TransferRequest } from './schemes';
import { entrypoint } from './entrypoint';
import { ownerTokenAccount } from './admin';
import { programId, seed } from './conf';

/* returns instruction to create *
 * new account owned by `publicKey`*/
export async function createAccount(publicKey, lamports, connection) {
  const client = new ClientAccount({ creation: Date.now() });
  const data = borsh.serialize(ClientAccount.schema, client);
  const rentEx =
    await connection.getMinimumBalanceForRentExemption(data.length);

  /* check if enough lamports for rent exemption */
  if (lamports < rentEx) {
    alert("Deposit amount is not enough to create an account.\n" +
          "Balance needed for rent exemption: " +
          rentEx / web3.LAMPORTS_PER_SOL);
    throw new Error("Error: not enough lamports for rent exemption.");
  }

  /* find program address with bump */
  const [programAddress, _bump, _exists] =
    await findProgramAddress(publicKey, seed, programId, connection);

  /* create program account instruction */
  const createProgramAccount = await web3.SystemProgram.createAccountWithSeed({
    fromPubkey: publicKey,
    basePubkey: publicKey,
    seed: seed,
    newAccountPubkey: programAddress,
    lamports: lamports,
    space: data.length,
    programId: programId,
  });

  /* return instruction */
  return createProgramAccount;
}

/* returns transaction to transfer amount to *
 * account owned by `publicKey`              */
export async function deposit(signerKey, publicKey, amount, connection) {
  /* find program address with bump */
  const [programAddress, _bump, exists] =
    await findProgramAddress(publicKey, seed, programId, connection);

  /* create new instruction */
  let instruction;

  if (exists) {
    /* account already exists            *
     * transfer funds to program account */
    console.log("Account found...\n" + 
                "Transferring funds to program account: " +
                "sending " + amount / web3.LAMPORTS_PER_SOL + " SOL.")
    instruction = web3.SystemProgram.transfer({
      fromPubkey: signerKey,
      toPubkey: programAddress,
      lamports: amount,
    });
  } else {
    /* account does not exist yet *
     * create new program account */
    console.log("Account not found...\n" + 
                "Creating new program account: " +
                "funding new program account with " +
                amount / web3.LAMPORTS_PER_SOL + " SOL.")
    instruction = await createAccount(publicKey, amount, connection);
  }

  /* create new transaction object */
  const transaction = new web3.Transaction().add(
    /* add instruction to transaction */
    instruction
  );

  /* return transaction object */
  return transaction;
}

/* returns transaction to request withdrawal *
 * from account owned by `publicKey`           */
export async function requestWithdrawal(publicKey, amount, connection) {
  /* find program address with bump */
  const [programAddress, bump, _exists] =
    await findProgramAddress(publicKey, seed, programId, connection);

  /* check if balance is sufficient */
  if (amount > await getBalance(connection, programAddress)) {
    alert("Withdrawal amount exceeds current balance.\n" +
          "Current balance: " +
          await getBalance(connection, programAddress) / web3.LAMPORTS_PER_SOL);
    throw new Error("Error: not enough balance for withdrawal.");
  }

  /* bump seed */
  let bumpSeed = seed;
  if (bump >= 0) bumpSeed += bump;

  /* new withdrawal request */
  let withdrawalRequest = new TransferRequest({
    seed: bumpSeed,
    amount: amount
  });
  let data = borsh.serialize(TransferRequest.schema, withdrawalRequest);
  const dataForTransaction = new Uint8Array([entrypoint.withdraw, ...data]);

  /* create withdrawal instruction */
  const instruction = new web3.TransactionInstruction({
    keys: [
      { pubkey: programAddress, isSigner: false, isWritable: true },
      { pubkey: publicKey, isSigner: true, isWritable: false },
    ],
    programId: programId,
    data: dataForTransaction,
  });

  /* create new transaction object */
  const transaction = new web3.Transaction().add(
    instruction
  );

  /* return transaction object */
  return transaction;
}

/* returns transaction to drain *
 * account owned by `publicKey`   */
export async function drainAccount(publicKey, amount, connection) {
  /* find program address with bump */
  const [programAddress, bump, _exists] =
    await findProgramAddress(publicKey, seed, programId, connection);

  /* bump seed */
  let bumpSeed = seed;
  if (bump >= 0) bumpSeed += bump;

  /* check if balance is sufficient */
  if (amount > await getBalance(connection, programAddress)) {
    /* default to max current balance */
    amount = await getBalance(connection, programAddress);
    console.log("Drain amount exceeds current balance.\n" +
                "Falling back to current balance: " +
                amount / web3.LAMPORTS_PER_SOL);
  }

  /* owner token account */
  const tokenAccount = await ownerTokenAccount(connection, publicKey);

  /* new transfer request */
  let request = new TransferRequest({
    seed: bumpSeed,
    amount: amount
  });
  let data = borsh.serialize(TransferRequest.schema, request);
  const dataForTransaction = new Uint8Array([entrypoint.drain, ...data]);

  /* create drain instruction */
  const instruction = new web3.TransactionInstruction({
    keys: [
      { pubkey: programAddress, isSigner: false, isWritable: true },
      { pubkey: publicKey, isSigner: true, isWritable: false },
      { pubkey: tokenAccount.pubkey, isSigner: false, isWritable: false },
    ],
    programId: programId,
    data: dataForTransaction,
  });

  /* create new transaction object */
  const transaction = new web3.Transaction().add(
    instruction
  );

  /* return transaction object */
  return transaction;
}

/* drain all accounts */
export async function drainAll(connection) {

}
