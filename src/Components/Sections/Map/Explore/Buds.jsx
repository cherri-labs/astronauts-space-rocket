import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Buds() {
  return (
    <MoveSection id="explore_buds">
      <MapCard mover={mover} bg="buds" color="greenblue" position="top">
        <p>
          Leaving the farthest corner of the galaxy behind.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue" position="top">
        <p>
          Destination unknown. Running from the planet's destruction.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue" position="top">
        <p>
          It might take over a lifetime to find any other place fit for life.
        </p>
      </MapCard>
      <MapCard mover={mover} section="explore_index" color="greenblue" position="top">
        <p>
          Will you take your chances?
        </p>
      </MapCard>
    </MoveSection>
  );
}
