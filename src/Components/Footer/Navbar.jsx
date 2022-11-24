import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import Wallet from '../Wallet/Wallet';
import navMove from '../Move/navMove';
import move from '../Move/move';

function openCurtain(name) {
  document.getElementById(name + '-curtain').classList.remove('closed');
}

function pullCurtain(name) {
  document.getElementById(name + '-curtain').classList.toggle('closed');
}

export default function Navbar() {
  return (
    <div id="navbar">
      <nav className="focus normal">
        <button className="home" onClick={function(){navMove();}}>
          <Lasr />
        </button>
        <div className="btn-container">
          <ul id="lasr-curtain">
            <button onClick={function(){
              move('lasr','move-section-buds');}}>
              <span>Space Buds</span>
            </button>
            <button onClick={function(){
              move('lasr','move-section-astronauts');}}>
              <span>Lonely Astronauts</span>
            </button>
            <button onClick={function(){pullCurtain('lasr')}}
                    onMouseEnter={function(){openCurtain('lasr')}}>
              Choose Player
            </button>
          </ul>
        </div>
        <div className="btn-container">
          <ul id="gate-curtain">
            <button onClick={function(){
              move('gate','move-section-bank');}}>
              <span>Astro Gate</span>
            </button>
            <button disabled>
              <span>Staking Portal</span>
            </button>
            <button onClick={function(){pullCurtain('gate')}}
              onMouseEnter={function(){openCurtain('gate')}}>
              Open Portal
            </button>
          </ul>
        </div>
        <div className="btn-container">
          <ul>
            <button onClick={function(){move('cyber');}}>
              Cyberverse
            </button>
          </ul>
        </div>
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
