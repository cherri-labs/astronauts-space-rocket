import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import Wallet from '../Wallet/Wallet';
import nav from '../Move/nav';
import move from '../Move/move';

export default function Navbar() {
  return (
    <nav id="navbar" className="focus">
      <button className="home" onClick={function(){nav();}}>
        <Lasr />
      </button>
      <button onClick={function(){move('lasr');}}>
        Choose Player
      </button>
      <button onClick={function(){move('gate');}}>
        Open Portal
      </button>
      <button onClick={function(){move('cyberverse');}}>
        Cyberverse
      </button>
      <button onClick={function(){move('roadmap');}}>
        Roadmap
      </button>
      <Wallet />
      <Icons />
    </nav>
  );
}
