import * as web3 from '@solana/web3.js';
import { tokenMint, tokenAmount } from './conf';

export async function ownerTokenAccountKey(connection, userKey) {
  const tokenAccount = await connection.getParsedTokenAccountsByOwner(userKey, {
    mint: tokenMint,
  });

  return tokenAccount.value[0].pubkey;
}

export async function isAdmin(connection, userKey) {
  const response = await connection.getTokenAccountBalance(
    ownerTokenAccountKey(connection, userKey)
  );
  const balance = response.value.amount;
  if (balance >= tokenAmount) return true;
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
