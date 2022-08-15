////////////////
/* conf file */
//////////////

const {
  Connection,
  PublicKey,
  clusterApiUrl,
} = require('@solana/web3.js');

const KEYPAIR = '../../program/rust/target/deploy/rust-keypair.json';
const CLUSTER_ID = 'devnet';
const PROGRAM_ID = new PublicKey('EByfzzWCZU5hKfvvsp4NJUPtei7KzFfmGrHSSBvaiEKK');
const MINT = new PublicKey('CVEzUhRyUwbxwjDWP6RhZqjGPiVnLtxc2oNDBJck8chn');
const MIN_AMOUNT = 1;

const clusterUrl = clusterApiUrl(CLUSTER_ID);
const connection = new Connection(
  clusterUrl,
  'confirmed',
);
const programId = new PublicKey(PROGRAM_ID);
const seed = 'bank';

module.exports = {
  cluster: clusterUrl,
  connection: connection,
  programId: programId,
  seed: Uint8Array.from(seed),
  tokenMint: MINT,
  tokenAmount: MIN_AMOUNT,
};
