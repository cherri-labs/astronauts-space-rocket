import React from 'react';

import Wallet from '../Wallet/Wallet';
import dropdown from '../../nav';

export default function Header() {
  return (
      <div id="header" className="steampunk">
        <div id="topbar">
          <nav id="navbar">
            <button className="icon" onClick={function(){dropdown()}}>
              ☰
            </button>
            <button onClick={function(){dropdown('#astronauts')}}>
              Lonely Astronauts
            </button>
            <button onClick={function(){dropdown('#buds')}}>
              Space Buds
            </button>
            <button onClick={function(){dropdown('#astrobank')}}>
              Astro Bank
            </button>
            <button onClick={function(){dropdown('#cyberverse')}}>
              Cyberverse
            </button>
            <button onClick={function(){dropdown('#roadmap')}}>
              Roadmap
            </button>
          </nav>
          <Wallet />
        </div>
      </div>
  );
}
