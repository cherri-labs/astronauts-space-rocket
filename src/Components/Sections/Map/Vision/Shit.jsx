import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Shit() {
  return (
    <MoveSection id="vision_shit">
      <MapCard mover={mover} center>
        <p>
          At its core our work is organic, it's experimental. And we
          believe that's <strong>healthy.</strong>
        </p>
        <p>
          It doesn't stagnate but keeps moving <strong>further</strong>.
        </p>
        <p>
          What you see is <strong>what you get</strong>. There's nothing
          behind the curtains. No skeletons, no secrets, no purple pills.
        </p>
      </MapCard>
      <MapCard mover={mover} section="vision_index" center>
        <p>
          We strive to remain ahead of times and promise to always deliver you
          with the <strong>dopest shit only.</strong>
        </p>
      </MapCard>
    </MoveSection>
  );
}
