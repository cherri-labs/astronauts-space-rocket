import React from 'react';
import Lasr from '../Icons/Lasr';
import Icons from './Icons';
import Wallet from '../Wallet/Wallet';
import navMove from '../Move/navMove';
import move from '../Move/move';

function toggleCurtain(name) {
  const curtain = document.getElementById(name + '-curtain')
  if (curtain) {
    curtain.classList.toggle('open');
  }
}

function Curtain(props) {
  const name = props.name;

  return (
    <button className={props.className}
            onClick={function(){toggleCurtain(name)}}>
      <span>{props.children}</span>
    </button>
  );
}

function CurtainNav(props) {
  return (
    <button className={props.className}
            onClick={function() {
              if (!props.disabled) {
                toggleCurtain(props.mover);
                move(props.mover, 'move-section-' + (props.section || 'index'));
              }
            }}
            disabled={props.disabled}>
      {(props.alone ?
        props.children :
        <span>{props.children}</span>)}
    </button>
  );
}

function BtnContainer(props) {
  return (
    <div className="btn-container">
      {props.children}
    </div>
  );
}

export default function Navbar() {
  return (
    <div id="navbar">
      <nav className="focus normal">
        <button className="home" onClick={function(){navMove();}}>
          <Lasr />
        </button>
        <BtnContainer>
          <ul id="lasr-curtain">
            <CurtainNav mover="lasr" section="buds">
              Space Buds
            </CurtainNav>
            <CurtainNav mover="lasr" section="astronauts">
              Lonely Astronauts
            </CurtainNav>
            <Curtain name="lasr">
              Choose Player
              <i className="arrow right" />
            </Curtain>
          </ul>
        </BtnContainer>
        <BtnContainer>
          <ul id="gate-curtain">
            <CurtainNav mover="gate" section="bank" alone>
              Open Portal
            </CurtainNav>
          </ul>
        </BtnContainer>
        <BtnContainer>
          <ul>
            <CurtainNav mover="cyber" alone>
              Cyberverse
            </CurtainNav>
          </ul>
        </BtnContainer>
      </nav>
      <CurtainNav className="exit" mover="home" alone>
        Exit
      </CurtainNav>
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
