import React from "react";
import Mover from '../../Menu/Mover';
import Bank from './Bank';

function GateMover() {
  return (
    <Mover id="gate-mover">
      <div id="move-section-bank"
           className="move-section active">
        <Bank />
      </div>
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
