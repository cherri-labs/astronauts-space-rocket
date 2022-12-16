import React from 'react';
import MapCard from '../MapCard';
import ExploreTitle from './ExploreTitle';

export default function Neotowns() {
  return (
    <div id="explore_neotowns" className="fragment">
      <MapCard wrapperClass="glitched__container"
               fragment="explore" by="neotowns" to="nav">
        <div className="glitched__text" id="glitch__this">Neotowns</div>
        <p>
          <ExploreTitle>
            Neotowns
          </ExploreTitle>
          {" "}is a new virtual landscape that blurs the boundaries between
          fantasy and reality, merging elements from both worlds for deeper
          levels of immersion.
        </p>
        <p>
          Our goal is to create a new metropolis built on top of multiple
          layers of fiction and then have it come to life.
          Each city is a world of art, creativity and imagination,
          designed with the use of powerful AI tools and heuristic
          generative algorithms that take into account all meaningful
          combinations and discard ones that look 'off'.
        </p>
        <p>
          We're creating an immersive environment that people can explore
          together, built for you to be able to create your own unique
          story and experience.
        </p>
        <p>
          The virtual space in which all towns rest is a unique shared
          universe, with no borders between life and dreams.
          A culture and society that blends real and digital elements,
          combining the best of the two.
        </p>
        <p>
          We aim to provide users with the means to build together a world
          where they can express themselves using ultimate 3D technology and
          embedded decentralized cross-blockchain applications allowing for
          the most organic and realistic experience to date.
        </p>
        <p>
          It's the birth of <strong>a new era</strong>
          <span className="prog-dots glitch" />{" "}
          are you just going to watch?
        </p>
        <span className="cybr__tag">E001</span>
      </MapCard>
    </div>
  );
}
