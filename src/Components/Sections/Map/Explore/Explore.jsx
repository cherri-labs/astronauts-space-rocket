import React from 'react';
import Pointer from '../Pointer';
//sect
import Index from './Index';
import Neotowns from './Neotowns';
import Buds from './Buds';
import Astronauts from './Astronauts';

export default function Explore() {
  return (
    <>
      <Index />
      <div id="explore-sub" className="sub-section">
        <Neotowns />
        <Buds />
        <Astronauts />
        <Pointer id="explore" to="esc" dir="left" mover="cyber" section="explore_index" fullscreen />
        <Pointer id="explore" name="forward" to="esc" dir="right" mover="cyber" section="explore_index" fullscreen />
      </div>
    </>
  );
}
