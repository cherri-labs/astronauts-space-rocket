import React from "react";

import World from './World';
import Vision from './Vision';
import Path from './Path';
import Mover from '../../Menu/Mover';

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Mover id="roadmap-mover">
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
