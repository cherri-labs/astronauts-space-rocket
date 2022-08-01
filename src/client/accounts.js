//////////////
/* accounts */
//////////////

import * as web3 from '@solana/web3.js';
import * as borsh from 'borsh';

import { ClientAccount, TransferRequest } from './schemes';
import { entrypoint } from './entrypoint';

/* returns balance data associated with `accountId` */
export async function getBalance(connection, accountId) {
    const info = await connection.getAccountInfo(accountId);
    if (!info) return 0;
    const data = info.data;
    if (data.length != 40) return 0;
    const client = borsh.deserialize(ClientAccount.schema, ClientAccount, data);
    return client.balance.toNumber() / web3.LAMPORTS_PER_SOL;
}

/* returns all accounts owned by `programId` */
export async function getAllAccounts(connection, programId) {
    let accounts = []
    const allAccounts = await connection.getProgramAccounts(programId);

    allAccounts.forEach((a) => {
        try {
            const acc = a.account;

            /* check if data length is correct */
            if (acc.data.length == 40) {
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
