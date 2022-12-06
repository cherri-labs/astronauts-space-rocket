import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Creators() {
  return (
    <MoveSection id="vision_creators">
      <MapCard mover={mover} bg="vision" center>
        <p>
          We are creators, not followers.
        </p>
        <p>
          When we build something, we do it <strong>our own way.</strong>
        </p>
      </MapCard>
      <MapCard mover={mover} section="vision_index" center>
        <p>
          We intend to create real change that truly has an impact on
          the <strong>web3</strong> community. Something that stands through
          the test of time.
        </p>
      </MapCard>
    </MoveSection>
  );
}
