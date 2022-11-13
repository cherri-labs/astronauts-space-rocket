import React from 'react';
import { MoveSection } from '../../Move/Mover';
import MapCard from './MapCard';

const mover = "roadmap";

function Mechas() {
  return (
    <MapCard mover={mover} title="Mecha Angels" bg="mechas" active>
      <p>
        At the <strong>Horizon Centre</strong> dense degraded
        circuitry under the gradient twilight stars glimpsed into a
        world where shadow obstructs and clutters with uneven
        machinery the metropolis' skyline.
      </p>
      <p>
        They call them <strong>Mechas</strong>.
      </p>
      <p>
        They're programmed to watch over the citizens' peace and prosperity.
      </p>
    </MapCard>
  );
}

function Ronins() {
  return (
    <MapCard mover={mover} title="Cyber Ronins" bg="ronins">
    <p>
    With the upsurge of machines in the months preceding the attack,
    the population was growing increasingly worried. While often
    dismissed as paranoid, groups started forming in secret
    to discuss solutions for the current &laquo; state of society &raquo;.
                                                                 </p>
    <p>
    They called themselves <strong>Ronins</strong>.
    </p>
    <p>
    Through the <strong>Ronins'</strong> uncorrupted eye we look
    at <strong>Mecha</strong> vigilantes and all we
    see is rotten mechanisms 50 ft tall taking their toll on the{" "}
    <strong>
      citizens
    </strong>.
      </p>
    </MapCard>
  );
}

function Phantoms() {
  return (
    <MapCard mover={mover} title="Phantom Shells" bg="phantoms">
      <p>
        As the night lurks in the <strong>Underground</strong> awakes
        and a thousand <strong>Phantoms</strong>, motherboards
    and neon signs light up the dark city alleyways.
      </p>
      <p>
        It's the birth of <b>a new era</b>, are you just going to watch?
      </p>
    </MapCard>
  );
}

function Buds() {
  return (
    <MapCard mover={mover} title="Space Buds" bg="buds">
      <p>
        From the farthest corner of the galaxy a spedition was sent.
      </p>
      <p>
        With destination unknown, they were escaping their star's
        destruction by the almighty hands of God.
      </p>
      <p>
        Only a small number of ships that took off that day survived.
      </p>
      <p>
        Warp engines and technology advancements allowed them to
        quickly cross thousands of light years until the radar caught an
        inhabitable planet.
      </p>
      <p>
        One of them has landed right into the <strong>city</strong>.
      </p>
    </MapCard>
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

function NeoTowns() {
  return (
    <MapCard mover={mover} title="Neo Towns" bg="neotowns">
      <p>
        Carbon emissions doubled every 18 months or so. When they
        began to settle the planet's atmosphere had already been
        reduced by about 2%.
      </p>
      <p>
        Because of that, <strong>Neo-Towns</strong> experience drastic
        temperature escalations through the year.
      </p>
      <p>
        Winters can get extremely cold, and summers burning hot.
      </p>
      <p>
        Following was a rapid decrease of population, and abandoned
        facilities growing in number accordingly. Inhabited buildings
        were often adapted to the stronger climate with scrap metal. This
        was also a quick fix for walls and windows damaged from war.
      </p>
    </MapCard>
  );
}

function BlueDiary() {
  return (
    <MapCard mover={mover} title="Blue Diary" bg="diary">
      <p>
        Found under the wreckage of an old{" "}
        <strong>
          underground house
        </strong>.
      </p>
      <p>
        It documented life in the city before{" "}
        <strong>
          crit point
        </strong>. During the attack many of the informations contained
        here happened to be striked from human knowledge.
      </p>
      <p>
        For many, this was the first and only history they knew.
      </p>
      <p>
        When the <strong>Ronins</strong> got their hands on it
        copies were made spreading its contents.
        Soon enough it also became known as <i>The Bible</i> in
        the <strong>Underground</strong> world.
      </p>
    </MapCard>
  );
}

export default function World() {
  return (
    <MoveSection id="world" active>
      <Mechas />
      <Ronins />
      <Phantoms />
      <Buds />
      <Astronauts />
      <NeoTowns />
      <BlueDiary />
    </MoveSection>
  );
}
