import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './Home';
import Astronauts from './Astronauts';
import Buds from './Buds';
import Bank from './Bank';
import Cyberverse from './Cyberverse';
import Roadmap from './Roadmap';

import pageScroll from './pageScroll';
import { menu } from './MapMenu';

export default function Fullpage() {
  const pluginWrapper = () => {
    require('./statics/fullpage.scrollHorizontally.min');
  };

  const Fullpage = () => (
    <ReactFullpage
    pluginWrapper={pluginWrapper}

    /* fullpage options */
    licenseKey={'gplv3-license'}
    anchors={['home', 'astronauts', 'buds', 'bank', 'cyber', 'map']}
    scrollingSpeed={1000}
    dragAndMove={true}
    scrollHorizontallyKey={'gplv3-license'}
    scrollHorizontally={true}
    continuousHorizontal={true}
    controlArrowsHTML={['<div class="arrow nav left"></div>', '<div class="arrow nav right"></div>']}
    parallaxKey={'gplv3-license'}
    parallax={true}
    parallaxOptions={{
      type: 'reveal',
      percentage: 62,
      property: 'transform'
    }}

    onLeave={function (origin, destination, direction, trigger) {
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

    afterLoad={function (origin, destination, direction, trigger) {
      /* entering */
      if (destination.anchor == 'bank') {
        pageScroll.show('wallet');
      }
    }}

    onSlideLeave={function (section, origin, destination, direction, trigger) {
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

    onSlideLoad={function (section, origin, destination, direction, trigger) {
      for (let i = destination.index; i >= 0; i--) {

      }


      /* if we land on a menu section */
      if (menu.anchors.includes(destination.anchor))
        /* activate respective button */
        menu.activateBtn(destination.anchor);
    }}

    render={({ state, fullpageApi }) => {
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
};
