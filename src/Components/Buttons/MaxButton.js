import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useCallback } from 'react';

import { getBalance, findProgramAddress } from '../../client/accounts';
import { seed, programId } from '../../client/conf';

export default function MaxBalance() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const onClick = useCallback(async () => {
    /* check wallet */
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

    /* find program address */
    const [programAddress, _bump, _exists] =
      await findProgramAddress(publicKey, seed, programId, connection);

    /* update amount textbox with current balance */
	const amountBox = document.getElementById('withdraw-amount');
    amountBox.value =
      await getBalance(connection, programAddress) / web3.LAMPORTS_PER_SOL;
  }, [publicKey, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey} className="inset">
    Max
    </button>
  );
};
