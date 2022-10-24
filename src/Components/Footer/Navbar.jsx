import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import nav from '../../nav';

export default function Navbar() {
  return (
    <nav id="navbar">
      <button className="icon" onClick={function(){nav()}}>
        ☰
      </button>
      <button className="home thin" onClick={function(){nav('home');}}>
        <Lasr />
      </button>
      <button onClick={function(){nav('lasr');}}>
        Choose Player
      </button>
      <button onClick={function(){nav('gate');}}>
        Astro Gate
      </button>
      <button onClick={function(){nav('cyberverse');}}>
        Cyberverse
      </button>
      <button onClick={function(){nav('roadmap');}}>
        Roadmap
      </button>
      <Icons />
    </nav>
  );
}
