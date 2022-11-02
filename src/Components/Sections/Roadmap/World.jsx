import React from 'react';
import Card, { CardTitle } from './Card';
import { MoveNav } from '../../Move/Mover';

export default function World() {
  return (
    <div id="move-section-world"
         className="move-section active">
      <div className="bg-container">
        <div className="world bg" />
      </div>
      <Card active>
        <CardTitle>A New World</CardTitle>
        <article>
          <p>
            At the <strong>Horizon Centre</strong> dense degraded
            circuitry under the gradient twilight stars glimpsed into a
            world where shadow obstructs and clutters with uneven
            machinery the metropolis' skyline.
          </p>
          <p>
            They call them <strong>Mechas</strong>, and they're
            programmed to watch over the citizens' peace and prosperity.
          </p>
          <p>
            But through the <strong>Rebels'</strong> uncorrupted eye all we
            see is rotten mechanisms 50 ft tall taking their toll on every brothel,
            merry-go-round and gambling den in town.
          </p>
        </article>
        <MoveNav mover="roadmap-mover" />
      </Card>
      <Card>
        <CardTitle>A New World</CardTitle>
        <article>
          <p>
            As the night lurks in the <strong>Underground</strong> awakes,
            and a thousand <strong>Phantoms</strong> and motherboards
            and neon signs light up all at the same time.
          </p>
          <p>
            It's the birth of <b>a new era</b>, are you just going to watch?
          </p>
        </article>
        <MoveNav mover="roadmap-mover" />
      </Card>
      <Card>
        <CardTitle>A Digital Realm</CardTitle>
        <article>
          <p>
            In this evolving digital realm, new and varied worlds
            spawn on everyday basis. With so many faces coming and going
            it's hard to keep a steady eye on things. That's why
            {" "}<b>we will keep our goals on top of priorities at all
                   times</b>.
            We work to create the content that's going to be part of the
            future. That's a privilege won't throw away, because
            {" "}<b>we all need something to believe in</b>.
          </p>
        </article>
        <MoveNav mover="roadmap-mover" />
      </Card>
      <Card>
        <CardTitle>A Digital Realm</CardTitle>
        <article>
          <p>
            A new generation is going to state once and for
            all what identity is and how we can define it. And as messy as
            that is, we will try our best to get the road down in a clear
            and linear path for you to walk on.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
      <Card>
        <CardTitle>The Way Things Were</CardTitle>
        <article>
          <p>
            Our world used to be <b>one of a kind</b>. A distinctive mark
            in an otherwise unholy chaos of wishful thinking and
            abstract reality. Now, we have to adapt.
          </p>
        </article>
        <MoveNav mover="roadmap-mover" />
      </Card>
      <Card>
        <CardTitle>The Future</CardTitle>
        <article>
          <p>
            The line that separates us from our dreams becomes
            {" "}<b>thinner and thinner</b>.
          </p>
          <p>
            <b>Our choices pave the way before us.</b>
          </p>
        </article>
        <MoveNav mover="roadmap-mover" />
      </Card>
    </div>
  );
}
