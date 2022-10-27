import React from "react";
import Mover from '../../Menu/Mover';
import Index from './Index';
import Astronauts from './Astronauts';
import Buds from './Buds';

function LasrMover() {
  return (
    <Mover id="lasr-mover">
      <div id="move-section-index"
           className="move-section active">
        <Index />
      </div>
      <div id="move-section-astronauts"
           className="move-section">
        <Astronauts />
      </div>
      <div id="move-section-buds"
           className="move-section">
        <Buds />
      </div>
    </Mover>
  );
}

export default function Lasr() {
  return (
    <div className="section retro" id="lasr">
      <LasrMover />
    </div>
  );
}
