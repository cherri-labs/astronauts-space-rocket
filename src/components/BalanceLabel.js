import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useCallback } from 'react';

import { getBalance, findProgramAddress } from '../client/accounts';
import { seed, programId } from '../client/conf';
import updateBalance from './updateBalance';
import { mouseOver, mouseLeave } from './noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('withd-balance-note'));
}

function onLeave() {
  /* hide note */
  mouseLeave(document.getElementById('withd-balance-note'));
}

export default function BalanceLabel() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey && connection) {
      updateBalance(publicKey, connection);
    }
  }, []);

  const onClick = useCallback(async () => {
    /* check wallet */
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

    await updateBalance(publicKey, connection);
  }, [publicKey, connection]);

  return (
    <label id="bank-balance" className="data"
    onClick={onClick}
    onMouseOver={onOver}
    onMouseLeave={onLeave}
    onFocus={onLeave}>
    Balance: 0 ◎
    </label>
  );
};
