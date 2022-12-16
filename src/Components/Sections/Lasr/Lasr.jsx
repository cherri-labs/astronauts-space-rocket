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
      <MoveSection id="buds" dir="left" mover="lasr" to="astronauts" wheel>
        <Buds />
      </MoveSection>
      <MoveSection id="astronauts" dir="right" mover="lasr" to="buds" wheel>
        <Astronauts />
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
