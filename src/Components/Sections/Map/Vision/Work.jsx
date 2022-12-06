import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Work() {
  return (
    <MoveSection id="vision_work">
      <MapCard mover={mover} center>
        <p>
          We don't follow leads or walk into footsteps. We put our hearts
          and souls into our work, and we believe that <strong>every inch of
          it</strong> is worth it.
        </p>
      </MapCard>
      <MapCard mover={mover} center>
        <p>
          If you want to help us believe you need to understand that change
          doesn't happen overnight, but one <strong>tiny step at a
          time.</strong>
        </p>
      </MapCard>
      <MapCard mover={mover} section="vision_index" center>
        <p>
          But also that our <strong>best days</strong> are all ahead of us.
        </p>
      </MapCard>
    </MoveSection>
  );
}
