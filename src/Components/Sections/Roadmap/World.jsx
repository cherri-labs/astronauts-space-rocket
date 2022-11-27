import React from 'react';
import { MoveSection } from '../../Move/Mover';
import MapCard from './MapCard';

const mover = "cyber";

function Neotowns() {
  return (
    <>
      <MapCard mover={mover} bg="neotowns">
        <p>
          At the <strong>Horizon Centre</strong> dense degraded
          circuitry under the gradient twilight stars glimpsed into a
          world where shadow obstructs and clutters with uneven
          machinery the metropolis' skyline.
        </p>
      </MapCard>
      <MapCard mover={mover}>
        <p>
          As the night lurks in the <strong>Underground</strong> awakes
          and a thousand <strong>Phantoms</strong>, motherboards
    and neon signs light up the dark city alleyways.
        </p>
      </MapCard>
      <MapCard mover={mover}>
        <p>
          It's the birth of <b>a new era</b>, are you just going to watch?
        </p>
      </MapCard>
    </>
  );
}

function Buds() {
  return (
    <>
      <MapCard mover={mover} bg="buds" color="greenblue">
        <p>
          From the farthest corner of the galaxy a spedition was sent.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue">
        <p>
          With destination unknown, they were forced to run away
          by the upcoming collapse of their own sun.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue">
        <p>
          They travelled long before they found another suitable
          planet.
        </p>
      </MapCard>
      <MapCard mover={mover} color="greenblue">
        <p>
          Until they landed on <strong>CITY</strong>.
        </p>
      </MapCard>
    </>
  );
}

function Astronauts() {
  return (
    <MapCard mover={mover} title="Lonely Astronauts" bg="astronauts">
      <p>
        Rogue spaceships cross the borders of{" "}
        <strong>Sypharpunk</strong> in an attempt to fetch
        dark matter at a cheaper price.
      </p>
      <p>
        When they get caught the only chance is <strong>teleportation</strong>.
        But not all <strong>portal guns</strong> on these
        crafts are as solid as you would expect.
      </p>
      <p>
        Sometimes they can take you right in the middle of nowhere.
        Nothing for billions of light years in any direction.
      </p>
      <p>
        The only option would be cryo-freezing. But even after
        thousands of years, you could wake up and still see nothing.
      </p>
      <p>
        It can get pretty lonely up there.
      </p>
    </MapCard>
  );
}

export default function World() {
  return (
    <MoveSection id="world">
      <Neotowns />
      <Buds />
      <Astronauts />
    </MoveSection>
  );
}
