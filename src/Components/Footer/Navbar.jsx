import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import Wallet from '../Wallet/Wallet';
import navMove from '../Move/navMove';
import move from '../Move/move';

export default function Navbar() {
  return (
    <div id="navbar">
      <nav className="focus normal">
        <button className="home" onClick={function(){navMove();}}>
          <Lasr />
        </button>
        <button onClick={function(){move('lasr');}}>
          Choose Player
        </button>
        <button onClick={function(){move('gate', 'move-section-bank');}}>
          Open Portal
        </button>
        <button onClick={function(){move('cyber');}}>
          Cyberverse
        </button>
      </nav>
      <button className="exit" onClick={function(){move('home');}}>
        Exit
      </button>
      <div id="bottom-bar" className="focus normal">
        <button className="home" onClick={function(){navMove();}}>
          <Lasr />
        </button>
        <Icons />
      </div>
      <Wallet />
    </div>
  );
}
