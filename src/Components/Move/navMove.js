import { moveReset } from './move';

/* current mover */
let curMover = 'home';

/* returns current mover id */
export function activeMover() {
  return curMover;
}

/* toggle navbar drodown and display sections */
export default function navMove(href) {
  /* bar container */
  const nav = document.getElementById("footer-nav");

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
