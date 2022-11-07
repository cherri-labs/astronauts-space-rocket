import React from "react";
import Mover, { MoveSection } from '../../Move/Mover';
import Index from './Index';
import Bank from './Bank';

function GateMover() {
  return (
    <Mover id="gate">
      <MoveSection active>
        <Index />
      </MoveSection>
      <MoveSection id="bank">
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
