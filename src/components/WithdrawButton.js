import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useEffect, useCallback } from 'react';

import * as bank from '../client/lib';
import { getBalance } from '../client/accounts';

export default function WithdrawButton() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  useEffect(() => {
    updateBalance();
  }, []);

  const updateBalance = async () => {
    if (publicKey && connection) {
      const label = document.getElementById('bank-balance');
      const balance = await getBalance(connection, publicKey);
      label.innerHTML = "Balance: " + balance + " ◎";
    }
  }

  const onClick = useCallback(async () => {
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

	const amountBox = document.getElementById('amount');
    const amount = Math.round(amountBox.value * web3.LAMPORTS_PER_SOL);
	amountBox.value = "";

    if (amount) {
      const transaction = await bank.requestWithdrawal(publicKey, amount);
      const signature = await sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'processed');
      await updateBalance();
    }
  }, [publicKey, sendTransaction, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey} className="submit">
    Withdraw
    </button>
  );
};
