import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Wallet: FC = () => {
  return (
    <div id="wallet">
    <WalletMultiButton />
    </div>
  );
};

export default Wallet;
