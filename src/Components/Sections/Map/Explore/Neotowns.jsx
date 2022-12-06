import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Neotowns() {
  return (
    <MoveSection id="explore_neotowns">
      <MapCard mover={mover} bg="neotowns" position="top">
        <p>
          At the <strong>Horizon Centre</strong>
          <span className="prog-dots glitch" />
        </p>
      </MapCard>
      <MapCard mover={mover} bg="neotowns" position="top">
        <p>
          Dense degraded circuitry under the gradient twilight stars
          <span className="prog-dots glitch" />
        </p>
      </MapCard>
      <MapCard mover={mover} bg="neotowns" position="top">
        <p>
          Glimpsed into a world where shadow obstructs and clutters with uneven
          machinery the metropolis' skyline.
        </p>
      </MapCard>
      <MapCard mover={mover} position="top">
        <p>
          As the night lurks in the <strong>Underground</strong> awakes
          <span className="prog-dots" />
        </p>
      </MapCard>
      <MapCard mover={mover} position="top">
        <p>
          And a thousand <strong>Phantoms</strong>, motherboards
    and neon signs light up the dark city alleys.
        </p>
      </MapCard>
      <MapCard mover={mover} position="top">
        <p>
          It's the birth of <strong>a new era</strong>
          <span className="prog-dots glitch" />
        </p>
      </MapCard>
      <MapCard mover={mover} section="explore_index" position="top">
        <p>
          Are you just going to watch?
        </p>
      </MapCard>
    </MoveSection>
  );
}
