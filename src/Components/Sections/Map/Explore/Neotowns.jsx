import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Neotowns() {
  return (
    <MoveSection id="explore_neotowns">
      <MapCard mover={mover} bg="neotowns" position="top">
        <p>
          <strong>Neotowns</strong> blur the boundaries between fantasy
          and reality, merging elements from both places for deeper levels
          of immersion within their world.
        </p>
      </MapCard>
      <MapCard mover={mover} position="top">
        <p>
          Dense degraded circuitry rots under the gradient twilight stars
          seen through the <strong>H.O.R.I.Z.O.N.</strong> buildings.
        </p>
      </MapCard>
      <MapCard mover={mover} position="top">
        <p>
          A glimpse into a world where shadow obstructs and clutters with
          uneven machinery the metropolis' skyline.
        </p>
      </MapCard>
      <MapCard mover={mover} position="top">
        <p>
          Now, as the night lurks in the <strong>Underground</strong> awakes...
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
