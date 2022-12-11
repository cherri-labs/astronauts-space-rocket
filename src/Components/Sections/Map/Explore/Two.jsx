import React from 'react';
import MapCard from '../MapCard';
import ExploreTitle from './ExploreTitle';
import fragNav from '../../../Move/fragNav';

export default function Two() {
  return (
    <div id="explore_two" className="fragment">
      <MapCard fragment="explore" by="two" to="nav">
        <p>
          <ExploreTitle>
            2
          </ExploreTitle>
          {" "}is a type of virtual world which allows users to interact
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
          inspired by hi-tech and lo-life science-fiction works. It is set
          in an alternate out-of-time era where people can build their own
          spaces, interact with each other and even live there if they choose.
          The city has a unique look where it blends elements from both reality
          and fantasy with underground and futuristic characteristics.
        </p>
        <p>
          Our vision is that <strong>2</strong> will be an open
          platform for developers to create unique content. It will be
          entirely owned by the community and regulated through the{" "}
          <a className="strong"
             onClick={function() {fragNav('explore', 'stardust');}}>
            STARDUST
          </a>
          {" "}token.
        </p>
        <p>
          Our goal is to build an open-source platform that allows creators
          and players alike to create anything they want within its boundaries
          - from games or d-apps to full-fledged social realities.
        </p>
      </MapCard>
    </div>
  );
}
