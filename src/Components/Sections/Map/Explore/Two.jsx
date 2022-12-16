import React from 'react';
import MapCard from '../MapCard';
import ExploreTitle from './ExploreTitle';

export default function Two() {
  return (
    <div id="explore_two" className="fragment">
      <MapCard className="cybr" fragment="explore" by="two" to="nav">
        <p>
          <ExploreTitle>
            2
          </ExploreTitle>
          {" "}is a type of dynamic world which allows users to interact
          and influence each other in a shared virtual environment.
        </p>
        <p>
          This immersive experience seeks to replicate the
          dystopian slate of science fiction stories, creating an open-ended
          experience for users within which they can explore multiple
          storylines and outcomes.
        </p>
        <p>
          Interactivity between different denizens
          of the metaverse results in an emergent narrative as participants
          engage with each other through gameplay or programmed elements,
          allowing for persistent individual and collective stories.
        </p>
        <p>
          At its core <strong>2</strong> is an urban fantasy world that is
          inspired by lo-life sci-fi. It is set
          in an uchronic era that allows players to easily transform the
          environment around them, interact with each other and explore
          together a new exciting digital realm.
          The city has a unique look where it blends elements from both reality
          and fantasy with underground and futuristic characteristics.
          Our vision is that <strong>2</strong> be an open
          platform for developers and players alike to create anything
          they can think of within its boundaries &#8212; from games and
          d-apps to full-fledged social realities.
          It will be entirely owned by the community and regulated
          through the{" "}
          <strong>
            STARDUST
          </strong>
          {" "}token, allowing users to expand its limits even further up
          to what they can imagine.
        </p>
        <span className="cybr__tag">E002</span>
      </MapCard>
    </div>
  );
}
