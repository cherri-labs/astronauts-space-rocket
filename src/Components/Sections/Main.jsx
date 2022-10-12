import React from 'react';

import Home from './Home';
import Astronauts from './Astronauts';
import Buds from './Buds';
import Bank from './Bank';
import Cyberverse from './Cyberverse';
import Roadmap from './Roadmap';

export default function Main() {
  return (
    <>
      <div className="fg retro sticky">
        <div id="p-stars" />
        <div id="p-stars2" />
        <div id="p-stars3" />
      </div>
      <Home />
      <Astronauts />
      <Buds />
      <Bank />
      <Cyberverse />
      <Roadmap />
    </>
  );
}
