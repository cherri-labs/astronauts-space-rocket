import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import React, { useCallback } from 'react';

import { getBalance, findProgramAddress } from '../../../../client/accounts';
import { seed, programId } from '../../../../client/conf';

export default function MaxBalance(props) {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const onClick = useCallback(async () => {
    /* check wallet */
    if (!publicKey) {
      throw new WalletNotConnectedError();
    }

    /* find program address */
    const [programAddress] =
      await findProgramAddress(publicKey, seed, programId, connection);

    /* update amount textbox with current balance */
	const amountBox = document.getElementById('withdraw-amount');
    amountBox.value =
      await getBalance(connection, programAddress) / web3.LAMPORTS_PER_SOL;
  }, [publicKey, connection]);

  const disabled = props.disabled;
  return (
    <button 
      className="inset"
      onClick={onClick}
      disabled={(!publicKey || disabled)}>
      Max
    </button>
  );
}
