import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

export default function Buds() {
  return (
    <MoveSection id="explore_buds">
      <MapCard color="greenblue">
        <p>
          Leaving the farthest corner of the galaxy behind.
        </p>
      </MapCard>
      <MapCard color="greenblue">
        <p>
          Destination unknown. Running from the planet's destruction.
        </p>
      </MapCard>
      <MapCard color="greenblue">
        <p>
          It might take over a lifetime to find any other place fit for life.
        </p>
      </MapCard>
      <MapCard color="greenblue">
        <p>
          Will you take your chances?
        </p>
      </MapCard>
    </MoveSection>
  );
}
