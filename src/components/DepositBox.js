import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useEffect } from 'react';

import { mouseOver, mouseLeave, setText } from './noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('dep-account-note'));

  /* null placeholder */
  setText(document.getElementById('deposit-account'), "");
}

export default function DepositAccount() {
  const { publicKey } = useWallet();

  /* init placeholder */
  useEffect(() => {
    if (publicKey) {
      setText(document.getElementById('deposit-account'), publicKey);
    }
  }, []);

  function onLeave() {
    /* hide note */
    mouseLeave(document.getElementById('dep-account-note'));

    /* check wallet */
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

    /* set placeholder */
    setText(document.getElementById('deposit-account'), publicKey);
  }

  return (
    <input type="text" id="deposit-account"
    onMouseOver={onOver}
    onMouseLeave={onLeave}
    onFocus={onLeave}
    placeholder={publicKey}/>
  );
};
