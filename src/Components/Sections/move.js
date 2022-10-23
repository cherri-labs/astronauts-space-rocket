import { menu } from './Map/Menu';
import glitchTrans from './glitchTransition';

const wrapperClassName = "card-wrap"; // class of containers to move
const glitchSelector = "#roadmap .bg-container"; // element to glitch on transition

let mover;
let sections;
let currentSectionId;
let currentIndex = 0;

/* returns current index position */
export function moveIndex() {
  return currentIndex;
}

/* initialize move container and sections */
function init(moverId) {
  /* move container */
  mover = document.getElementById(moverId);

  /* get all sections */
  sections = mover.getElementsByClassName("move-section");

  /* initialize to first section */
  currentSectionId = sections[0].id;
}

/* call move to previous section */
export function moveBack(moverId) {
  if (!mover) init(moverId);
  move(moverId, currentSectionId, currentIndex-1);
}

/* call move to next section */
export function moveNext(moverId) {
  if (!mover) init(moverId);
  move(moverId, currentSectionId, currentIndex+1);
}

/* move with transition effect */
export function moveWithTrans(moverId, sectionId, index = 0) {
  /* when changing section */
  if ((sectionId !== currentSectionId) ||
      /* or changing page */
      (index !== currentIndex))
    /* run glitch transition */
    glitchTrans(glitchSelector);

  /* move to page */
  move(moverId, sectionId, index);
}

/* move between sections */
export default function move(moverId, sectionId, index = 0) {
  if (!mover) init(moverId);

  /* move section */
  const moveSection = mover.querySelector("#" + sectionId);
  /* get all sections */
  const sections = mover.getElementsByClassName("move-section");

  /* reset sections */
  [...sections].forEach(function (s) {
    s.classList.remove("active");
  });
  /* activate selected section */
  moveSection.classList.add("active");

  /* get card containers */
  const cards = moveSection.getElementsByClassName(wrapperClassName);
  /* initialize index */
  let i = 0;

  /* activate selected article */
  [...cards].forEach(function (c) {
    if (index !== i++) {
      c.classList.remove("active");
    } else {
      c.classList.add("active");
    }
  });

  if (index < 0) { /* index points to previous section */
    let lastSection, previousSectionId;

    /* get previous section id */
    [...sections].forEach(function (s) {
      if (lastSection && s.id === sectionId) {
        /* set to previous section */
        previousSectionId = lastSection.id;
      }

      /* update last section */
      lastSection = mover.querySelector("#" + s.id);
    });

    /* wrap-around first section */
    if (!previousSectionId)
      /* set it to first section */
      previousSectionId = sections[sections.length-1].id;

    /* fetch last index of the section */
    const lastIndex = mover
      .querySelector("#" + previousSectionId)
      .getElementsByClassName(wrapperClassName)
      .length - 1;

    /* run glitch transition */
    glitchTrans(glitchSelector);

    /* recursive move to next section */
    move(moverId, previousSectionId, lastIndex);
  } else if (index >= i) { /* index points to next section */
    let lastSection, nextSectionId;

    /* get next section id */
    [...sections].forEach(function (s) {
      if (lastSection) {
        if (lastSection.id === sectionId) {
          /* set to current section */
          nextSectionId = s.id;
        }
      }

      /* update last section */
      lastSection = mover.querySelector("#" + s.id);
    });

    /* wrap-around last section */
    if (!nextSectionId)
      /* set it to first section */
      nextSectionId = sections[0].id;

    /* run glitch transition */
    glitchTrans(glitchSelector);

    /* recursive move to next section */
    move(moverId, nextSectionId);
  } else { /* we activated our section properly */
    /* now we fetch our menu button section id */
    /* we skip the first two words (map-section-...) */
    const btnSection = sectionId.split('-').slice(2);
    /* we activate our sticky menu button */
    menu.activateBtn(btnSection.join('-'));

    /* and finally we update our tracker values */
    currentSectionId = sectionId;
    currentIndex = index;
  }
}
