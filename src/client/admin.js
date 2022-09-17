import { tokenMint, tokenAmount } from './conf';

export async function ownerTokenAccount(connection, userKey) {
  const tokenAccounts = await connection.getParsedTokenAccountsByOwner(userKey, {
    mint: tokenMint,
  });

  return tokenAccounts.value[0];
}

export async function isAdmin(connection, userKey) {
  const owner = await ownerTokenAccount(connection, userKey);
  const response =
    await connection.getTokenAccountBalance(owner.pubkey);
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
