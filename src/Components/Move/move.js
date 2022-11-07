import { menu } from './SideMenu';
import nav from './nav';
import glitchTrans from '../../glitchTransition';

const wrapperClassName = "card-wrap"; // class of containers to move
const glitchSelector = "#roadmap .bg-container"; // element to glitch on transition

/* mover containers */
let movers = [];

/* page titles */
let titles = [];
titles['main'] = 'LASR NFT';
/* home */
titles['home'] = [];
titles['home']['index'] = titles['main'];
/* lasr */
titles['lasr'] = [];
titles['lasr']['astronauts'] = 'Lonely Astronauts';
titles['lasr']['buds'] = 'Space Buds';
/* gate */
titles['gate'] = [];
titles['gate']['bank'] = 'Astro Gate';
/* cyberverse */
titles['cyberverse'] = [];
titles['cyberverse']['index'] = 'Cyberverse';
/* roadmap */
titles['roadmap'] = [];
titles['roadmap']['index'] = 'WORLD';
titles['roadmap']['world'] = 'WORLD';
titles['roadmap']['vision'] = 'VISION & GOALS';
titles['roadmap']['path'] = 'PATH';

/* returns current active section node element */
export function activeSection() {
  /* get all sections */
  const sections = document.getElementsByClassName("section");
  let activeSection;

  /* fetch active section element */
  [...sections].forEach(function (s) {
    if (s.classList.contains('active'))
      activeSection = s;
  });

  return activeSection;
}

/* returns current index position */
export function moveIndex(moverId) {
  moveInit(moverId);
  if (movers[moverId])
    return movers[moverId]['currentIndex'];
  else
    return 0;
}

/* initialize mover container and sections */
function moveInit(moverId) {
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

      moveDefault(moverId);
    }
  }
}

/* reset mover index default values */
function moveDefault(moverId) {
  if (movers[moverId]) {
    /* mover container */
    const mover = document.getElementById(moverId);

    /* initialize current index */
    movers[moverId]['currentIndex'] = 0;

    /* get all sections */
    movers[moverId]['sections'] = mover.getElementsByClassName("move-section");

    /* first section */
    const first = movers[moverId]['sections'][0];

    if (first)
      /* initialize to first section */
      movers[moverId]['currentSectionId'] = first.id;
  }
}

/* reset mover index initial state */
export function moveReset(moverId) {
  if (movers[moverId]) {
    /* reset default values */
    moveDefault(moverId);
    /* reset to initial state */
    move(moverId,
         movers[moverId]['currentSectionId'],
         movers[moverId]['currentIndex']);
  }
}

/* call move to previous section */
export function moveBack(moverId) {
  moveInit(moverId);
  move(moverId,
       movers[moverId]['currentSectionId'],
       movers[moverId]['currentIndex']-1);
}

/* call move to next section */
export function moveNext(moverId) {
  moveInit(moverId);
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
export default function move(moverId, sectionId = 'index', index = 0) {
  moveInit(moverId);

  /* get move container */
  const mover = movers[moverId]['mover'];
  /* get all sections */
  const sections = mover.getElementsByClassName("move-section");
  /* move section */
  const moveSection = mover.querySelector("#" + sectionId);

  /* initialize index */
  let i = 0;

  if (moveSection) {
    /* run default transition if mover has transition type */
    if (mover.classList.contains("transition"))
      moveTransition(moverId, sectionId, index);

    if (moveSection) {
      /* reset sections */
      [...sections].forEach(function (s) {
        s.classList.remove("active");
      });
      /* activate selected section */
      moveSection.classList.add("active");

      /* get card containers */
      const cards = moveSection.getElementsByClassName(wrapperClassName);

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
    }
  } else {
    /* fallback to nav call */
    nav(moverId);
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
//  glitchTrans(glitchSelector);

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
//  glitchTrans(glitchSelector);

    /* recursive move to next section */
    move(moverId, nextSectionId);
  } else { /* we activated our section properly */
    /* now we isolate our mover and section tag name */
    const sectionTag = sectionId.split('-').slice(2).join('-') || sectionId;
    const moverTag = moverId.split('-').slice(0,-1).join('-') || moverId;

    if (moveSection) {
      /* we fetch our menu button section id */
      /* we skip the first two words (map-section-...) */
      const btnSection = sectionTag;
      /* we activate our sticky menu button */
      menu.activateBtn(moverTag,
                       btnSection);
    }

    /* update our page title */
    let title = titles['main'];

    /* if there are own mover titles */
    if (titles[moverTag]) {
      /* get move section title */
      title = titles[moverTag][sectionTag] ||
              titles[moverTag]['index'] || // fallback to index title
              titles['main'];
      /* if not default */
      if (title !== titles['main'])
        title += ' | ' + titles['main'];
    }

    /* set title */
    document.title = title;

    /* and finally we update our tracker values */
    movers[moverId]['currentSectionId'] = sectionId;
    movers[moverId]['currentIndex'] = index;
  }
}
