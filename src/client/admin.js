import * as web3 from '@solana/web3.js';

const MINT_ACCOUNT = new web3.PublicKey("CVEzUhRyUwbxwjDWP6RhZqjGPiVnLtxc2oNDBJck8chn");

export async function isAdmin(connection, userKey) {
  const mint = await connection.getAccountInfo(MINT_ACCOUNT);

  if (mint.owner == userKey) return true
  else return false;
}

export default async function panelView(connection, userKey) {
  const panels = document.querySelectorAll(".admin");
  [...panels].forEach(async function (p) {
    if (await isAdmin(connection, userKey)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
