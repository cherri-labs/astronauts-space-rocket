import { menu } from './SideMenu';
import navMove, { activeMover } from './navMove';
import glitchTrans from '../../glitchTransition';

const wrapperClassName = 'card-wrap'; // class of containers to move
const glitchSelector = '#roadmap .bg-container'; // element to glitch on transition

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
/* cyber */
titles['cyber'] = [];
titles['cyber']['index'] = 'Cyberverse';

/* returns id of active move section inside mover *
 * or current active section node id */
export function activeSection(moverId) {
  let sections, activeSection;

  if (moverId) {
    /* get move sections for mover */
    sections = movers[moverId]['mover'].getElementsByClassName('move-section');
  } else {
    /* get all sections */
    sections = document.getElementsByClassName('section');
  }

  /* fetch active section element */
  [...sections].forEach(function (s) {
    if (s.classList.contains('active'))
      activeSection = s.id;
  });

  return activeSection;
}

/* returns section sibling in either direction */
export function adjSection(dir=1) { // dir can be 1, 0, -1
  /* initialize section trackers */
  let res, activeSection, previousSection;

  /* get all sections */
  const sections = document.getElementsByClassName('section');

  /* fetch active section element */
  [...sections].forEach(function (s) {
    if (!res) {
      if (activeSection) {
        // return next section
        res = s.id;
      } else if (s.classList.contains('active')) {
        if (dir < 0) {
          // return previous section
          res = previousSection;
        } else if (dir === 0) {
          // return current section
          res = s.id;
        } else {
          // set active section
          activeSection = s.id;
        }
      } else {
        previousSection = s.id;
      }
    }
  });

  return res;
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
    movers[moverId]['sections'] = mover.getElementsByClassName('move-section');

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

/* move to previous section */
export function moveBack(moverId=activeMover(), offset=1) {
  moveInit(moverId);
  move(moverId,
       movers[moverId]['currentSectionId'],
       movers[moverId]['currentIndex']-offset);
}

/* move to next section */
export function moveNext(moverId=activeMover(), offset=1) {
  moveInit(moverId);
  move(moverId,
       movers[moverId]['currentSectionId'],
       movers[moverId]['currentIndex']+offset);
}

/* move to next mover */
export function navNext() {
  move(adjSection());
}

/* move to previous mover */
export function navBack() {
  move(adjSection(-1));
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
export default function move(moverId=activeMover(),
                             sectionId='move-section-index',
                             index=0) {
  moveInit(moverId);
  sectionId = sectionId || activeSection(moverId);

  if (movers[moverId]) {
    /* get move container */
    const mover = movers[moverId]['mover'];
    /* get all sections */
    const sections = mover.getElementsByClassName('move-section');
    /* move section */
    const moveSection = mover.querySelector('#' + sectionId);

    /* nav to mover */
    navMove(moverId);

    /* initialize index */
    let i = 0;

    if (moveSection) {
      /* run default transition if mover has transition type */
      if (mover.classList.contains('transition'))
        moveTransition(moverId, sectionId, index);

      if (moveSection) {
        /* parse move-sections */
        [...sections].forEach(function(s) {
          /* disable parent sub-section */
          if (s.parentElement.classList.contains('sub-section'))
            s.parentElement.classList.remove('active');
          /* disable selected move-section */
          s.classList.remove('active');
        });

        /* enable parent sub-section */
        if (moveSection.parentElement.classList.contains('sub-section'))
          moveSection.parentElement.classList.add('active');
        /* activate selected move-section */
        moveSection.classList.add('active');

        /* get card containers */
        const cards = moveSection.getElementsByClassName(wrapperClassName);

        if (cards) {
          /* activate selected article */
          [...cards].forEach(function (c) {
            if (index !== i++) {
              c.classList.remove('active');
              moveSection.classList.remove('next__screen');
            } else {
              c.classList.add('active');

              /* check if nav next screen card */
              if (c.classList.contains('next')) {
                moveSection.classList.add('next__screen');
              }
            }
          });
        }
      }
    } else {
      /* fallback to nav call */
      navMove(moverId);
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
        lastSection = mover.querySelector('#' + s.id);
      });

      /* wrap-around first section */
      if (!previousSectionId)
        /* set it to first section */
        previousSectionId = sections[sections.length-1].id;

      /* fetch last index of the section */
      let lastIndex = mover
        .querySelector('#' + previousSectionId)
        .getElementsByClassName(wrapperClassName)
        .length;
      /* don't let index go under zero or endless recursion */
      if (lastIndex) lastIndex--;

      /* run glitch transition */
      //  glitchTrans(glitchSelector);

      /* recursive move to previous section */
      move(moverId, previousSectionId, lastIndex);
    } else if (index >= i && index) { /* index points to next section */
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
        lastSection = mover.querySelector('#' + s.id);
      });

      /* wrap-around last section */
      if (!nextSectionId)
        /* set it to first section */
        nextSectionId = sections[0].id;

      /* run glitch transition */
      //  glitchTrans(glitchSelector);

      /* recursive move to previous section */
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

      /* toggle fullscreen state */
      if (moverTag === 'lasr' &&
          (sectionTag === 'index' ||
           sectionTag === 'undefined' ||
           !sectionTag)) {
        /* lasr index */
        document.getElementById("lasr").classList.add('fullscreen');
      } else if (moverTag === 'cyber' &&
                 sectionTag !== 'index' &&
                 sectionTag !== 'undefined' &&
                 sectionTag) {
        /* cyber except index */
        document.getElementById("cyber").classList.add('fullscreen');
      } else {
        document.getElementById("lasr").classList.remove('fullscreen');
        document.getElementById("cyber").classList.remove('fullscreen');
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
          title += ' / ' + titles['main'];
      }

      /* set title */
      document.title = title;

      /* and finally we update our tracker values */
      movers[moverId]['currentSectionId'] = sectionId;
      movers[moverId]['currentIndex'] = index;
    }
  }
}
