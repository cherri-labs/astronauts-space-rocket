import React from "react";

import World from './Map/World';
import Vision from './Map/Vision';
import Path from './Map/Path';
import MapMenu from './Map/Menu';
import Mover from './Mover';

function Container() {
  return (
    <div id="container">
      <MapMenu />
      <div id="content">
        <Mover>
          <World />
          <Vision />
          <Path />
        </Mover>
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <div className="section lights-out" id="roadmap">
      <Container />
    </div>
  );
}
