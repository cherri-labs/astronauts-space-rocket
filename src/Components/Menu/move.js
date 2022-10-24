import { menu } from './SideMenu';
import glitchTrans from '../../glitchTransition';

const wrapperClassName = "card-wrap"; // class of containers to move
const glitchSelector = "#roadmap .bg-container"; // element to glitch on transition

let movers = [];

/* returns current index position */
export function moveIndex(moverId) {
  init(moverId);
  if (movers[moverId])
    return movers[moverId]['currentIndex'];
  else
    return 0;
}

/* initialize mover container and sections */
function init(moverId) {
  /* mover container */
  const mover = document.getElementById(moverId);

  /* if mover element is loaded */
  if (mover) {
    /* if not mover array */
    if (!movers[moverId]) {
      /* initialize array */
      movers[moverId] = [];
    }

    /* if not mover data */
    if (!movers[moverId]['mover']) {
      /* initialize mover */
      movers[moverId]['mover'] = mover;

      /* initialize current index */
      movers[moverId]['currentIndex'] = 0;

      /* get all sections */
      movers[moverId]['sections'] = mover.getElementsByClassName("move-section");

      /* initialize to first section */
      movers[moverId]['currentSectionId'] = movers[moverId]['sections'][0].id;
    }
  }
}

/* call move to previous section */
export function moveBack(moverId) {
  init(moverId);
  move(moverId,
       movers[moverId]['currentSectionId'],
       movers[moverId]['currentIndex']-1);
}

/* call move to next section */
export function moveNext(moverId) {
  init(moverId);
  move(moverId,
       movers[moverId]['currentSectionId'],
       movers[moverId]['currentIndex']+1);
}

/* move with transition effect */
export function moveTransition(moverId, sectionId, index = 0) {
  /* when changing section */
  if ((sectionId !== movers[moverId]['currentSectionId']) ||
      /* or changing page */
      (index !== movers[moverId]['currentIndex']))
    /* run glitch transition */
    glitchTrans(glitchSelector);
}

/* move between sections */
export default function move(moverId, sectionId, index = 0) {
  init(moverId);
  const mover = movers[moverId]['mover'];

  /* run transition if mover is transition type */
  if (mover.classList.contains("transition"))
    moveTransition(moverId, sectionId, index);

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

  if (cards) {
    /* activate selected article */
    [...cards].forEach(function (c) {
      if (index !== i++) {
        c.classList.remove("active");
      } else {
        c.classList.add("active");
      }
    });
  }

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
  } else if (index >= i && i !== 0) { /* index points to next section */
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
    movers[moverId]['currentSectionId'] = sectionId;
    movers[moverId]['currentIndex'] = index;
  }
}
