import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect, useCallback } from 'react';

import updateBalance from '../Buttons/updateBalance';
import { mouseOver, mouseLeave } from './noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('withd-balance-note'));
}

function onLeave() {
  /* hide note */
  mouseLeave(document.getElementById('withd-balance-note'));
}

export default function BalanceLabel(props) {
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

  const disabled = props.disabled;
  return (
    <label id="bank-balance" className="data"
           onClick={onClick}
           onMouseOver={onOver}
           onMouseLeave={onLeave}
           onFocus={onLeave}
           disabled={disabled}>
    Balance: 0 ◎
    </label>
  );
}
