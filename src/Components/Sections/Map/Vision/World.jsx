import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function World() {
  return (
    <MoveSection id="vision_world">
      <MapCard mover={mover} center>
        <p>
          Our world used to be <strong>one of a kind</strong>. A distinctive
          mark in an otherwise unholy chaos of wishful thinking and
          abstract reality.
        </p>
      </MapCard>
      <MapCard mover={mover} center>
        <p>
          Now we abandon pieces of what used to be in favor
          of <strong>progress</strong> and <strong>technological advancement</strong>.
        </p>
      </MapCard>
      <MapCard mover={mover} section="vision_index" center>
        <p>
          We keep <strong>looking up</strong> and <strong>moving on</strong>.
        </p>
      </MapCard>
    </MoveSection>
  );
}
