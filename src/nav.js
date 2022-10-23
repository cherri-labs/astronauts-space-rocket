/* toggle navbar drodown and display sections */
export default function nav(href) {
  /* <-- toggle navbar --> */
  /* bar container */
  const nav = document.getElementById("nav-container");

  /* toggle mobile dropdown menu */
  nav.classList.toggle("dropdown");

  /* listen for mouse click */
  window.addEventListener('click', function(e) {
    /* click outside nav menu */
    if (!nav.contains(e.target) ||
        (e.target.tagName.toLowerCase() !== 'button' &&
         e.target.tagName.toLowerCase() !== 'span' &&
         e.target.tagName.toLowerCase() !== 'i')) {
      /* hide menu */
      nav.classList.remove("dropdown");
    }
  });

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
