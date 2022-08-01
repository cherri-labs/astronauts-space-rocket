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
const PROGRAM_ID = 'EByfzzWCZU5hKfvvsp4NJUPtei7KzFfmGrHSSBvaiEKK';
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
};
