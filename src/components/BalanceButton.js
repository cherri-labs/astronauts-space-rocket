import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useCallback } from 'react';

import { getAllAccounts } from '../client/accounts';
import { programId } from '../client/conf';
import * as bank from '../client/lib';

export default function BalanceButton() {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
      if (!publicKey) {
        throw new WalletNotConnectedError();
      }

      const accountBox = document.getElementById('balance-account');
      const account = new web3.PublicKey(accountBox.value);
      accountBox.value = "";

      const amountBox = document.getElementById('balance-amount');
      const amount = Math.round(amountBox.value * web3.LAMPORTS_PER_SOL);
      amountBox.value = "";

      const transaction = await bank.addBalance(account, amount, connection);
      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);

    return (
        <button onClick={onClick} disabled={!publicKey} className="submit">
            Add balance
        </button>
    );
};
