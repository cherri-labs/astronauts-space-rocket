import React from "react";
import Mover, { MoveSection } from '../../Move/Mover';
import Index from './Index';
import Astronauts from './Astronauts';
import Buds from './Buds';

function LasrMover() {
  return (
    <Mover id="lasr">
      <MoveSection className="index__page" id="index" active>
        <Index />
      </MoveSection>
      <MoveSection id="astronauts">
        <Astronauts />
      </MoveSection>
      <MoveSection id="buds">
        <Buds />
      </MoveSection>
    </Mover>
  );
}

export default function Lasr() {
  return (
    <div className="section retro focus fullscreen" id="lasr">
      <LasrMover />
    </div>
  );
}
