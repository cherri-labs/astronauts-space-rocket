import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MoveButton from '../../../Move/MoveButton';

export default function Index() {
  return (
    <MoveSection id="vision_index" className="map_index">
      <div className="bg-container">
        <div className="vision bg" />
      </div>
      <nav className="nav-container">
        <nav className="nav-container vertical">
          <div className="bg-container flex">
            <div className="*something* bg" />
          </div>
          <MoveButton mover="cyber"
                      goto="vision_creators"
                      menu>
            Creators
          </MoveButton>
          <MoveButton mover="cyber"
                      goto="vision_world"
                      menu>
            World
          </MoveButton>
          <MoveButton mover="cyber"
                      goto="vision_dreams"
                      menu>
            Dreams
          </MoveButton>
        </nav>
        <nav className="nav-container vertical">
          <MoveButton mover="cyber"
                      goto="vision_shit"
                      menu>
            Shit
          </MoveButton>
          <MoveButton mover="cyber"
                      goto="vision_work"
                      menu>
            Our Work
          </MoveButton>
          <MoveButton mover="cyber"
                      goto="vision_web3"
                      menu>
            Web3
          </MoveButton>
        </nav>
      </nav>
    </MoveSection>
  );
}
