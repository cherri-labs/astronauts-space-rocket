import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import nav from '../Move/nav';
import move from '../Move/move';

export default function Navbar() {
  return (
    <nav id="navbar" className="focus">
      <button className="icon" onClick={function(){nav()}}>
        ☰
      </button>
      <button className="home thin" onClick={function(){move('home');}}>
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
      <Icons />
    </nav>
  );
}
