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
      <ParallaxLayer
        sticky={{ start: 0, end: 5 }}
        className="fg retro">
        <div id="p-stars" />
        <div id="p-stars2" />
        <div id="p-stars3" />
      </ParallaxLayer>
      <Home />
      <Astronauts />
      <Buds />
      <Bank />
      <Cyberverse />
      <ParallaxLayer
        offset={5}
        speed={2}
        className="retro">
        <div className="grey bg"></div>
      </ParallaxLayer>
      <Roadmap />
    </Parallax>
  );
}
