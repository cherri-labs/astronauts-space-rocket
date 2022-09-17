//////////////
/* accounts */
//////////////

import * as web3 from '@solana/web3.js';
import * as borsh from 'borsh';

import { ClientAccount } from './schemes';

/* return lamports balance from account *
 * associated with `accountId` */
export async function getBalance(connection, accountId) {
  /* retrieve account info */
  const info = await connection.getAccountInfo(accountId);
  /* account doesn't exist */
  if (!info) return 0;
  /* return account balance in lamports */
  return info.lamports;
}

/* check if account is owned by program id */
export async function isProgramOwned(accountId, programId, connection) {
  /* retrieve account info */
  const info = await connection.getAccountInfo(accountId);
  /* account doesn't exist */
  if (!info) return 0;
  /* converting to string to avoid unknown inconsistency */
  if (info.owner.toString() === programId.toString())
    return 1; else return 0;
}

/* return all accounts owned by `programId` */
export async function getAllAccounts(connection, programId) {
  let accounts = []
  const allAccounts = await connection.getProgramAccounts(programId);

  allAccounts.forEach((a) => {
    try {
      const acc = a.account;

      /* check if data length is correct */
      if (acc.data.length === 40) {
        const client = borsh.deserialize(ClientAccount.schema, ClientAccount, acc.data);
        accounts.push({
          key: a.pubkey,
          id: client.id,
          balance: client.balance.toNumber() / web3.LAMPORTS_PER_SOL,
          lamports: acc.lamports,
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  return accounts;
}

/* find and return program address, *
 * bump (-1 if no bump was used),   *
 * and account state:               *
 * 0 if needs to be created         *
 * 1 if already exists              */
export async function findProgramAddress(publicKey, seed, programId, connection) {
  /* incremental bump starting at 0 */
  let bump = -1;

  /* create init program address with no seed bump */
  let programAddress =
    await web3.PublicKey.createWithSeed(publicKey, seed, programId);

  /* while account has 0 balance (doesn't exist) */
  while (await getBalance(connection, programAddress)) {
    /* program owns the account (was already created) */
    if (await isProgramOwned(programAddress, programId, connection))
      return [programAddress, bump, 1];

    /* generate new program address with bump */
    programAddress = await web3.PublicKey.createWithSeed(
      /* user public key */
      publicKey,
      /* incremental bump */
      seed + ++bump,
      /* program from which to derive the account */
      programId
    );
  }

  /* return first empty account found */
  return [programAddress, bump, 0];
}
