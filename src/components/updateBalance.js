import * as web3 from '@solana/web3.js';

import { getBalance, findProgramAddress } from '../client/accounts';
import { seed, programId } from '../client/conf';

export default async function updateBalance(publicKey, connection) {
  if (publicKey && connection) {
    const label = document.getElementById('bank-balance');

    const [programAddress, bump, exists] =
      await findProgramAddress(publicKey, seed, programId, connection);

    const balance =
      await getBalance(connection, programAddress) / web3.LAMPORTS_PER_SOL;

    label.innerHTML = "Balance: " + balance + " ◎";
  }
}
