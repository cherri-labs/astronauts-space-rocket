import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useCallback } from 'react';

import { getBalance, getAllAccounts } from '../client/accounts';
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

      const balance = await getBalance(connection, account);

      const amount = document.getElementById('balance-value');
      amount.innerHTML = "Balance: " +  + " ◎";
    }, [publicKey, sendTransaction, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey} className="submit">
    Add balance
    </button>
  );
};
