/* navbar */
export default function dropdown(href) {
  /* navbar */
  let navbar = document.getElementById("navbar");

  /* mobile dropdown */
  if (!navbar.className) {
    navbar.className = "dropdown";
  } else {
    navbar.className = "";
  }

  /* wallet button */
  let wallet = document.getElementById("wallet");

  /* wallet drop */
  if (!wallet.className) {
    wallet.className = "drop";
  } else {
    wallet.className = "";
  }

  /* href scroll */
  if (href)
    window.location.assign(href);
}
