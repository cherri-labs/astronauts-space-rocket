import React from 'react';
import { MoveSection } from '../../Move/Mover';
import MapCard from './MapCard';

const mover = "cyber";

export default function Buds() {
  return (
    <MoveSection id="explore_buds">
      <MapCard mover={mover} bg="buds" color="greenblue">
        <p>
          From the farthest corner of the galaxy an expedition was sent.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue">
        <p>
          With destination unknown, they ran from the collapse
          of their home planet.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue">
        <p>
          They travelled long before they could find another suitable
          host.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue">
        <p>
          They landed right in the <strong>City</strong>.
        </p>
      </MapCard>
      <MapCard mover={mover} nav next />
    </MoveSection>
  );
}
