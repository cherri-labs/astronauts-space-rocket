import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

import World from './Map/World';
import Vision from './Map/Vision';
import Path from './Map/Path';
import MapMenu from './Map/Menu';

const Txt = () => {
  return (
    <div className="text">
      <div className="map">
        <World />
        <Vision />
        <Path />
      </div>
    </div>
  );
};

function Container() {
  return (
    <div id="container">
      <MapMenu />
      <div id="content">
        <Txt />
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <ParallaxLayer
      offset={5.3}
      speed={0.4}>
      <div className="section" id="roadmap">
        <Container />
      </div>
    </ParallaxLayer>
  );
}
