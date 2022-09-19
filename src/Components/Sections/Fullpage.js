import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Home from './Home';
import Astronauts from './Astronauts';
import Buds from './Buds';
import Bank from './Bank';
import Cyberverse from './Cyberverse';
import Roadmap from './Roadmap';

import pageScroll from './pageScroll';

export default function Fullpage() {
  const Fullpage = () => (
    <ReactFullpage
    /* fullpage options */
    licenseKey = {'gplv3-license'}
    anchors = {['home', 'astronauts', 'buds', 'bank', 'cyber', 'map']}
    scrollingSpeed = {1000}
    dragAndMove = {true}
    scrollHorizontallyKey = {'gplv3-license'}
    scrollHorizontally = {true}
    continuousHorizontal = {true}
    controlArrowsHTML = {['<div class="arrow nav left"></div>', '<div class="arrow nav right"></div>']}
    parallaxKey = {'gplv3-license'}
    parallax = {true}
    parallaxOptions = {{
      type: 'reveal',
      percentage: 62,
      property: 'transform'
    }}

	onLeave = {function(origin, destination, direction, trigger) {
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

	afterLoad = {function(origin, destination, direction, trigger) {
	  /* coming */
	  if (destination.anchor == 'bank') {
		pageScroll.show('wallet');
	  }
	}}

    render = { ({ state, fullpageApi }) => {
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
