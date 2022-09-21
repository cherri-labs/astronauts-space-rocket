import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useCallback } from 'react';

import { getAllAccounts } from '../client/accounts';
import { programId } from '../client/conf';
import * as bank from '../client/lib';
import togglePanel from '../client/admin';
import updateBalance from './updateBalance';

export default function DrainButton() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  /* activate admin panel view */
  if (publicKey) (async () => {
    await togglePanel(connection, publicKey);
  })();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

    /* if `Drain all accounts` is checked */
    if (document.getElementById('drainAll').checked) {
      /* fetch all accounts */
      const accounts = await getAllAccounts(connection, programId);

      /* drain each account */
      for (const acc of accounts) {
        const transaction = bank.drainAccount(acc.id, acc.lamports, connection);
        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
      }
    } else {
      const accountBox = document.getElementById('drain-account');
      const account = new web3.PublicKey(accountBox.value);
      accountBox.value = "";

      const amountBox = document.getElementById('drain-amount');
      const amount = Math.round(amountBox.value * web3.LAMPORTS_PER_SOL);
      amountBox.value = "";

      const transaction = await bank.drainAccount(account, amount);
      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'processed');
      console.log("Transaction sent!\n" +
                  "Tx hash: " + signature);

      await updateBalance(publicKey, connection);
    }
  }, [publicKey, sendTransaction, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey} className="submit">
    Drain account
    </button>
  );
};
