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

function Curtain(props) {
  const name = props.name;

  return (
    <button onMouseEnter={function(){openCurtain(name)}}>
      {props.children}
    </button>
  );
}

function CurtainNav(props) {
  return (
    <button onClick={function() {
      if (!props.disabled) {
        pullCurtain(props.mover);
        move(props.mover, 'move-section-' + props.section);
      }
    }}
            disabled={props.disabled}>
      <span>{props.children}</span>
    </button>
  );
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
            <CurtainNav mover="lasr" section="buds">
              Space Buds
            </CurtainNav>
            <CurtainNav mover="lasr" section="astronauts">
              Lonely Astronauts
            </CurtainNav>
            <Curtain name="lasr">
              Choose Player
            </Curtain>
          </ul>
        </div>
        <div className="btn-container">
          <ul id="gate-curtain">
            <CurtainNav mover="gate" section="bank">
              Astro Gate
            </CurtainNav>
            <CurtainNav disabled>
              Staking Portal
            </CurtainNav>
            <Curtain name="gate">
              Open Portal
            </Curtain>
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
