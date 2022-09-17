import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

import { mouseOver, mouseLeave } from '../Labels/noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('dep-account-note'));
}

export default function DepositAccount() {
  const { publicKey } = useWallet();

  function onLeave() {
    /* hide note */
    mouseLeave(document.getElementById('dep-account-note'));

    /* check wallet */
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }
  }

  return (
    <input type="text" id="deposit-account"
    onMouseOver={onOver}
    onMouseLeave={onLeave}
    onFocus={onLeave}
    placeholder={publicKey}/>
  );
};
