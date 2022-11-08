import React, { FC, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import GlitchSpan from '../GlitchSpan';
import lang from '../lang';
import _uniqueId from 'lodash/uniqueId';

const Wallet: FC = () => {
  const [id] = useState(_uniqueId("wallet-button__glitch"));

  return (
    <div id="wallet">
      <WalletMultiButton>
        <GlitchSpan id={id}
                    steps="2"
                    duration="0"
                    delay="100"
                    write={lang["wallet"]}>
          Select Wallet
        </GlitchSpan>
      </WalletMultiButton>
    </div>
  );
};

export default Wallet;
