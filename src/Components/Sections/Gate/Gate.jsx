import React from "react";
import Mover, { MoveSection } from '../../Move/Mover';
import Bank from './Bank';

function GateMover() {
  return (
    <Mover id="gate">
      <MoveSection id="bank" active>
        <Bank />
      </MoveSection>
    </Mover>
  );
}

export default function Gate() {
  return (
    <div className="section retro" id="gate">
      <GateMover />
    </div>
  );
}
