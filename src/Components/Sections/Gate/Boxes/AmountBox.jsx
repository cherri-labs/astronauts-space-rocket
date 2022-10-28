import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export default function AmountBox(props) {
  const { publicKey } = useWallet();
  return (
    <input type="number" id={props.id + "-amount"}
           onMouseOver={props.onOver}
           onMouseLeave={props.onLeave}
           onFocus={props.onLeave}
           placeholder="0"
           disabled={(!publicKey || props.disabled)} />
  );
}
