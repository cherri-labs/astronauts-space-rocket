import React from 'react';
import { MoveNav } from '../Mover';

export default function World() {
  return (
    <div id="map-section-world"
         className="move-section active">
      <div className="world bg" />
      <div className="card-wrap active">
        <div className="card">
          <h3>A New World</h3>
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
              see is rotten mechanisms 50 ft tall rule on every street,
              merry-go-round, brothel, strip show, motel room and gambling den
              in town.
            </p>
          </article>
          <MoveNav />
        </div>
      </div>
      <div className="card-wrap">
        <div className="card">
          <h3>A New World</h3>
          <article>
            <p>
              As the night lurks in the <strong>Underground</strong> awakes,
              and a thousand windows, <strong>Phantoms</strong>, motherboards
              and neon signs light up all at the same time.
            </p>
            <p>
              It's the birth of <b>a new era</b>, are you just going to watch?
            </p>
          </article>
          <MoveNav />
        </div>
      </div>
      <div className="card-wrap">
        <div className="card">
          <h3>A Digital Realm</h3>
          <article>
            <p>
              In this evolving digital realm, new and varied worlds
              spawn on everyday basis. With so many people coming and going
              it's hard to keep a steady eye on things.  That's why this project
              is so important to us. <b>We will
                                         not let our values drift and we will keep our goals on top
                                         of priorities at all times.</b>
            </p>
            <p>
              Because we all need something
              to believe in.
            </p>
          </article>
          <MoveNav />
        </div>
      </div>
      <div className="card-wrap">
        <div className="card">
          <h3>A Digital Realm</h3>
          <article>
            <p>
              A generation that is going to state once and for
              all what identity is and how we can define it. And as messy as
              that is, we will try our best to get the road down in a clear
              and straight path for you to walk on.
            </p>
            <MoveNav />
          </article>
        </div>
      </div>
      <div className="card-wrap">
        <div className="card">
          <h3>The Way Things Were</h3>
          <article>
            <p>
              Our world used to be <b>one of a kind</b>. A distinctive mark
              in an otherwise unholy chaos of wishful thinking and
              abstract reality. Now, we have to adapt.
            </p>
          </article>
          <MoveNav />
        </div>
      </div>
      <div className="card-wrap">
        <div className="card">
          <h3>The Future</h3>
          <article>
            <p>
              The line that separates us from our dreams <b>becomes thinner
                                                             and thinner.</b>
            </p>
            <p>
              We have to take what we can and let go of the rest.
            </p>
            <p>
              <b>Our choices <i>pave</i> the way before us.</b>
            </p>
          </article>
          <MoveNav />
        </div>
      </div>
    </div>
  );
}
