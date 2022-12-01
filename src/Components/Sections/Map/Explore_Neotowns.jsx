import React from 'react';
import { MoveSection } from '../../Move/Mover';
import MoveButton from '../../Move/MoveButton';
import MapCard from './MapCard';

const mover = "cyber";

export default function Neotowns() {
  return (
    <MoveSection id="explore_neotowns">
      <MapCard mover={mover} bg="neotowns">
        <p>
          At the <strong>Horizon Centre</strong> dense degraded
          circuitry under the gradient twilight stars glimpsed into a
          world where shadow obstructs and clutters with uneven
          machinery the metropolis' skyline.
        </p>
      </MapCard>
      <MapCard mover={mover}>
        <p>
          As the night lurks in the <strong>Underground</strong> awakes
          and a thousand <strong>Phantoms</strong>, motherboards
    and neon signs light up the dark city alleys.
        </p>
      </MapCard>
      <MapCard mover={mover}>
        <p>
          It's the birth of <b>a new era</b>, are you just going to watch?
        </p>
      </MapCard>
      <MapCard mover={mover} nav bar>
        <div className="taskbar">
          <nav className="nav-container blocks">
            <MoveButton mover="cyber"
                        goto="explore_buds"
                        menu>
              Space Buds
            </MoveButton>
            <MoveButton mover="cyber"
                        goto="explore_astronauts"
                        menu>
              Lonely Astronauts
            </MoveButton>
          </nav>
        </div>
      </MapCard>
    </MoveSection>
  );
}
