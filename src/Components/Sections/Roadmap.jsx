import React from "react";

import World from './Map/World';
import Vision from './Map/Vision';
import Path from './Map/Path';
import Mover from '../Menu/Mover';

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Mover id="map-mover" transition>
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
