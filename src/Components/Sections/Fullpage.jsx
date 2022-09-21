import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './Home';
import Astronauts from './Astronauts';
import Buds from './Buds';
import Bank from './Bank';
import Cyberverse from './Cyberverse';
import Roadmap from './Roadmap';

import pageScroll from './pageScroll';
import { menu } from './Map/Menu';

/* fullpage sections anchor-data */
const anchorList = ['home',
                    'astronauts',
                    'buds',
                    'bank',
                    'cyber',
                    'map'];

/* returns arrow html for direction */
function arrowHtml(dir) {
  return '<div class="arrow nav ' + dir + '"></div>';
}

export default function Fullpage() {
  const Fullpage = () => (
    <ReactFullpage
    /* fullpage options */
      licenseKey = {'gplv3-license'}
      anchors = { anchorList }
      scrollingSpeed = {1000}
      controlArrowsHTML = {[arrowHtml('left'), arrowHtml('right')]}

      onLeave = {function(origin, destination, direction) {
        /* leaving */
        if (origin.anchor == 'bank') {
          if (direction == 'up')
            pageScroll.leaveUp();
          else
            pageScroll.leaveDown();
        }

        if (destination.anchor == 'bank') {
          if (direction == 'up')
            pageScroll.enterUp();
          else
            pageScroll.enterDown();
        }
      }}

      afterLoad = {function(origin, destination) {
        /* entering */
        if (destination.anchor == 'bank') {
          pageScroll.show('wallet');
        }
      }}

      onSlideLeave = {function(section, origin, destination, direction) {
        if (destination.index == 0) { /* on the first slide */
          /* activate respective button */
          menu.activateBtn(menu.anchors[0]);
        } else if (menu.anchors.includes(destination.anchor)) { /* on the start of a section */
          /* activate respective button */
          menu.activateBtn(destination.anchor);
        } else { /* in the middle of a section */
          if (origin.index == 0 &&
              direction == 'left') { /* wrapping around from first slide */
            /* activate respective button */
            menu.activateBtn(menu.anchors.slice(-1)[0]);
          } else {
            /* for map menu slide sections */
            for (const index in menu.anchors) {
              if (origin.anchor == menu.anchors[index] &&
                  direction == 'left') { /* going to previous section */
                /* activate respective button */
                menu.activateBtn(menu.anchors[index - 1]);
                break;
              }
            }
          }
        }
      }}

      afterSlideLoad = {function(section, origin, destination) {
        /* first slide fullpage bug workaround */
        if (destination.index === 0)
          destination.anchor = 'world';

        /* destination is menu section */
        if (menu.anchors.includes(destination.anchor))
          /* activate respective button */
          menu.activateBtn(destination.anchor);
        else /* anchor not on menu */
          window.fullpage_api.moveSlideLeft();
      }}

      render = { () => {
        return (
          <ReactFullpage.Wrapper>
            <Home />
            <Astronauts />
            <Buds />
            <Bank />
            <Cyberverse />
            <Roadmap />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  return (
    <Fullpage />
  );
}
