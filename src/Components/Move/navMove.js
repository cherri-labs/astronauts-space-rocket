import { moveReset } from './move';

/* current mover */
let curMover;

/* toggle navbar drodown and display sections */
export default function navMove(href) {
  /* bar container */
  const nav = document.getElementById("footer-nav");

  /* listen for mouse click */
  window.addEventListener('click', function(e) {
    /* click outside nav menu */
    if (!nav.contains(e.target) ||
        (e.target.tagName.toLowerCase() !== 'button' &&
         e.target.tagName.toLowerCase() !== 'a' &&
         e.target.tagName.toLowerCase() !== 'span' &&
         e.target.tagName.toLowerCase() !== 'i')) {
      /* hide dropdown */
      nav.classList.remove("dropdown");

      /* close curtains */
      const curtains = nav.querySelectorAll('ul');
      [...curtains].forEach(function (c) {
        c.classList.remove('open');
      });
    }
  });

  if (!href)
    /* toggle dropdown */
    nav.classList.toggle("dropdown");

  if (href) {
    if (curMover !== href && curMover + '-mover' !== href) {
      /* update current mover */
      curMover = href;

      /* remove active class from all sections */
      const sections = document.getElementsByClassName("section");
      [...sections].forEach(function (s) {
        s.classList.remove("active");
      });

      /* section to activate */
      const activeSection = document.getElementById(href);

      /* activate correct section */
      activeSection.classList.add("active");

      /* mover inside section */
      const mover = activeSection.querySelector(".move");

      /* if mover exists */
      if (mover)
        /* reset section mover */
        moveReset(mover.id);
    }

    /* hide dropdown */
    nav.classList.remove("dropdown");
  }
}
