import React from "react";
import Mover, { MoveSection } from '../../Move/Mover';
import Pointer from '../Map/Pointer';
import Index from './Index';
import Astronauts from './Astronauts';
import Buds from './Buds';
import Mint from './Mint';

function LasrMover() {
  return (
    <Mover id="lasr">
      <MoveSection className="index__page" id="index" active>
        <Index />
      </MoveSection>
      <MoveSection id="buds" dir="right" mover="lasr" to="astronauts" wheel>
        <Buds />
      </MoveSection>
      <MoveSection id="astronauts" dir="left" mover="lasr" to="buds" wheel>
        <Astronauts />
      </MoveSection>
      <MoveSection id="mint">
        <Mint />
        <Pointer mover="lasr" section="buds" id="buds" to="esc" dir="left" only />
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
