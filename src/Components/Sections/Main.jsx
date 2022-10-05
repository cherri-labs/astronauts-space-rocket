import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Home from './Home';
import Astronauts from './Astronauts';
import Buds from './Buds';
import Bank from './Bank';
import Cyberverse from './Cyberverse';
import Roadmap from './Roadmap';

export default function Main() {
  return (
    <Parallax pages={6} style={{ top: '0', left: '0' }}>
      <Home />
      <ParallaxLayer
        sticky={{ start: 1, end: 2 }}
        style={{ zIndex: -1 }}
        className="retro">
        <div className="blue bg"></div>
        <div id='p-stars'></div>
      </ParallaxLayer>
      <Astronauts />
      <Buds />
      <Bank />
      <ParallaxLayer
        offset={4}
        className="retro">
        <div id='p-stars'></div>
      </ParallaxLayer>
      <Cyberverse />
      <ParallaxLayer
        offset={5}
        speed={2}
        className="retro">
        <div className="grey bg"></div>
        <div id='p-stars'></div>
      </ParallaxLayer>
      <Roadmap />
    </Parallax>
  );
}
