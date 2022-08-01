import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useCallback } from 'react';

import * as bank from '../client/lib';

export default function WithdrawButton() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

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
    }
  }, [publicKey, sendTransaction, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey} className="submit">
    Withdraw
    </button>
  );
};
