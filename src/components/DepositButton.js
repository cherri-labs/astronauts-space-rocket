import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useEffect, useCallback } from 'react';

import * as bank from '../client/lib';
import { getBalance } from '../client/accounts';
import updateBalance from './updateBalance';

export default function DepositButton() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

	const accountBox = document.getElementById('deposit-account');
    const keyValue = accountBox.value || publicKey
    const account = new web3.PublicKey(keyValue);
	accountBox.value = "";

	const amountBox = document.getElementById('deposit-amount');
    const amount = Math.round(amountBox.value * web3.LAMPORTS_PER_SOL);
	amountBox.value = "";

    if (amount) {
      const transaction = await bank.deposit(publicKey, account, amount, connection);
      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'processed');
      console.log("Transaction sent!\n" +
                  "Tx hash: " + signature);

      await updateBalance(publicKey, connection);
    }
  }, [publicKey, sendTransaction, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey} className="submit">
    Deposit
    </button>
  );
};
