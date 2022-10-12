/* toggle navbar drodown and display sections */
export default function nav(href) {
  /* <-- toggle navbar --> */
  /* navbar */
  const navbar = document.getElementById("navbar");

  /* toggle mobile dropdown menu */
  navbar.classList.toggle("dropdown");

  /* wallet button */
  const wallet = document.getElementById("wallet");

  /* toggle wallet dropdown style */
  wallet.classList.toggle("dropdown");

  /* <-- display section --> */
  /* display correct section */
  if (href) {
    /* remove active class from all sections */
    const sections = document.getElementsByClassName("section");
    [...sections].forEach(function (s) {
      s.classList.remove("active");
    });

    /* activate correct section */
    document.getElementById(href).classList.add("active");
  }
}
