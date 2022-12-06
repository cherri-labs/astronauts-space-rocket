import React from 'react';
import Pointer from '../Pointer';
//sect
import Index from './Index';
import Creators from './Creators';
import World from './World';
import Dreams from './Dreams';
import Shit from './Shit';
import Work from './Work';
import Web3 from './Web3';

export default function Vision() {
  return (
    <>
      <Index />
      <div id="vision-sub" className="sub-section">
        <Creators />
        <World />
        <Dreams />
        <Shit />
        <Work />
        <Web3 />
        <Pointer id="vision" to="esc" dir="left" mover="cyber" section="vision_index" fullscreen />
        <Pointer id="vision" name="forward" to="esc" dir="right" mover="cyber" section="vision_index" fullscreen />
      </div>
    </>
  );
}
