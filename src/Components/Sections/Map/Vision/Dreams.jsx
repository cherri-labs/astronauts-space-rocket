import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Dreams() {
  return (
    <MoveSection id="vision_dreams">
      <MapCard mover={mover} center>
        <p>
          The line that separates us from our dreams becomes <strong>thinner
          and thinner</strong>.
        </p>
      </MapCard>
      <MapCard mover={mover} center>
        <p>
          We're walking on that thin line. We want to make <strong>impossible
          things happen</strong>.
        </p>
      </MapCard>
      <MapCard mover={mover} center>
        <p>
          We don't wait on others to pick a road. We pave our own path. We
          are <strong>relentless</strong> and <strong>stay true to our
          goals.</strong>
        </p>
      </MapCard>
      <MapCard mover={mover} section="vision_index" center>
        <p>
          And we're going to <strong>grow stronger with you.</strong> With
          every turning point.
        </p>
      </MapCard>
    </MoveSection>
  );
}
