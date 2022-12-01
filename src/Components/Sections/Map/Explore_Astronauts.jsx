import React from 'react';
import { MoveSection } from '../../Move/Mover';
import MapCard from './MapCard';

const mover = "cyber";

export default function Astronauts() {
  return (
    <MoveSection id="explore_astronauts">
      <MapCard mover={mover} bg="astronauts">
        <p>
          Rogue spaceships cross the borders of{" "}
          <strong>Sypharpunk</strong> in an attempt to fetch
          dark matter at a cheaper price.
        </p>
      </MapCard>
      <MapCard mover={mover}>
        <p>
          But not all these spacecrafts are as solid as they're meant to be.
        </p>
      </MapCard>
      <MapCard mover={mover}>
        <p>
          Even a tiny shift in the navigator can take you right in the
          middle of nowhere. Nothing for billions and billions of light years.
        </p>
      </MapCard>
      <MapCard mover={mover}>
        <p>
          After a thousand years in the freezer, you could still wake
          up and see nothing ahead.
        </p>
      </MapCard>
    </MoveSection>
  );
}
