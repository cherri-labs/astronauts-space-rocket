import React, { FC, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import GlitchSpan from '../GlitchSpan';
import lang from '../lang';
import _uniqueId from 'lodash/uniqueId';

function Content(props) {
  const [id] = useState(_uniqueId("wallet-button__glitch"));

  if (props.glitch) {
    return (
      <GlitchSpan id={id}
                  steps="2"
                  duration="0"
                  delay="100"
                  write={lang["wallet"]}>
        {props.children}
      </GlitchSpan>
    );
  } else {
    return (
      <span>
        {props.children}
      </span>
    );
  }
}

const Wallet: FC = (props) => {
  const text = props.children || "Select Wallet";

  return (
    <div id="wallet" className="wallet-container">
      <WalletMultiButton>
        <Content glitch={props.glitch}>
          {text}
        </Content>
      </WalletMultiButton>
    </div>
  );
};

export default Wallet;
