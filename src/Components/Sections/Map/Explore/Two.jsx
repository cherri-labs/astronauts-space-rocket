import React from 'react';
import MapCard from '../MapCard';
import ExploreTitle from './ExploreTitle';

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
      </MapCard>
    </div>
  );
}
