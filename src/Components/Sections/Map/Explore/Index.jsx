import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MoveButton from '../../../Move/MoveButton';

export default function Index() {
  return (
    <MoveSection id="explore_index" className="map_index">
      <div className="bg-container">
        <div className="explore bg" />
      </div>
      <nav className="nav-container vertical">
        <MoveButton mover="cyber"
                    goto="explore_neotowns"
                    menu>
          <div className="neotowns img" />
          <span>Neotowns</span>
        </MoveButton>
        <MoveButton mover="cyber"
                    goto="explore_buds"
                    menu disabled>
          <div className="spaceship img" />
          <span>Space Buds</span>
        </MoveButton>
        <MoveButton mover="cyber"
                    goto="explore_astronauts"
                    menu disabled>
          <div className="planet img" />
          <span>Lonely Astronauts</span>
        </MoveButton>
      </nav>
    </MoveSection>
  );
}
