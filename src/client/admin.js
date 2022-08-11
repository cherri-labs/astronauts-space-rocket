import * as web3 from '@solana/web3.js';

const MINT = new web3.PublicKey("CVEzUhRyUwbxwjDWP6RhZqjGPiVnLtxc2oNDBJck8chn");

export async function isAdmin(connection, userKey) {
  const tokenAccount = await connection.getParsedTokenAccountsByOwner(userKey, {
    mint: MINT,
  });

  const tokenAccountKey = tokenAccount.value[0].pubkey;

  const response = await connection.getTokenAccountBalance(tokenAccountKey);
  const balance = response.value.amount;
  if (balance > 0) return true;
  else return false;
}

export default async function togglePanel(connection, userKey) {
  const panels = document.querySelectorAll(".admin");
  [...panels].forEach(async function (p) {
    if (await isAdmin(connection, userKey)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
