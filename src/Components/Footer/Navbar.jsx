import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import Wallet from '../Wallet/Wallet';
import nav from '../Move/nav';
import move from '../Move/move';

export default function Navbar() {
  return (
    <div id="navbar">
      <nav className="focus normal">
        <button className="home" onClick={function(){nav();}}>
          <Lasr />
        </button>
        <button onClick={function(){move('lasr');}}>
          Choose Player
        </button>
        <button onClick={function(){move('gate', 'move-section-bank');}}>
          Open Portal
        </button>
        <button onClick={function(){move('cyberverse');}}>
          Cyberverse
        </button>
        <button onClick={function(){move('roadmap');}}>
          Explore
        </button>
      </nav>
      <div id="bottom-bar" className="focus normal">
        <button className="home" onClick={function(){nav();}}>
          <Lasr />
        </button>
        <Icons />
      </div>
      <Wallet />
      <button className="exit hidden" onClick={function(){move('home');}}>
        Exit
      </button>
    </div>
  );
}
