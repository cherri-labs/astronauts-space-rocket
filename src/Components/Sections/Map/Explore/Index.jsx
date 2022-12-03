import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MoveButton from '../../../Move/MoveButton';

export default function Index() {
  return (
    <MoveSection id="explore_index">
      <div className="bg-container">
        <div className="explore bg" />
      </div>
      <nav className="nav-container vertical">
        <MoveButton mover="cyber"
                    goto="explore_neotowns"
                    menu>
          Neotowns
        </MoveButton>
        <MoveButton mover="cyber"
                    goto="explore_buds"
                    menu>
          Space Buds
        </MoveButton>
        <MoveButton mover="cyber"
                    goto="explore_astronauts"
                    menu disabled>
          <span>Lonely Astronauts</span>
        </MoveButton>
      </nav>
    </MoveSection>
  );
}
