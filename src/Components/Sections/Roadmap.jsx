import React from 'react';

import World from './Map/World';
import Vision from './Map/Vision';
import Path from './Map/Path';
import MapMenu from './Map/Menu';

export default function Roadmap() {
  return (
    <div className="section page" id="roadmap">
      <div id="container">
        <MapMenu />
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
  );
}
