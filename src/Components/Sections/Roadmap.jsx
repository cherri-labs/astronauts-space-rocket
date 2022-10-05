import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

import World from './Map/World';
import Vision from './Map/Vision';
import Path from './Map/Path';
import MapMenu from './Map/Menu';

export default function Roadmap() {
  return (
    <ParallaxLayer
      offset={5}
      speed={0.5}>
      <div className="section" id="roadmap">
        <div id="container">
          <MapMenu />
          <div id='p-stars3'></div>
          <div id="content">
            <div className="text">
              <div className="map">
                <World />
                <Vision />
                <Path />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
