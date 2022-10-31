import React from 'react';
import Mover from '../Move/Mover';
import Lasr from '../Icons/Lasr';
import GlitchSpan from '../GlitchSpan';
import nav from '../Move/nav';

const Txt = () => {
  return (
    <div className="text card">
      <article>
        <h3>Cyberverse</h3>
        <p>
          Welcome to the{" "}
          <a className="strong">
            <GlitchSpan id="cyberverse__glitch" write="レーザー トークン">
              Cyberverse
            </GlitchSpan>
          </a>
          <i className="arrow right"></i>
          a dinamically growing ever-expanding
          digital reality.{" "}
          <a className="strong"
             onClick={function(){nav('lasr');}}>
            <GlitchSpan id="lasr__glitch" write="レーザー トークン">
              LASR NFTs
            </GlitchSpan>
          </a>{" "}
          are your all-access pass. They allow you to freely explore
          all new features and released products.
        </p>
      </article>
    </div>
  );
};

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Lasr type="full" tilt />
        <Txt />
      </div>
    </div>
  );
}

function CyberMover() {
  return (
    <Mover id="cyberverse-mover">
      <div id="move-section-index"
           className="move-section active">
        <div className="index__page" id="cyberverse__index">
          <Container />
        </div>
      </div>
    </Mover>
  );
}

export default function Cyberverse() {
  return (
    <div className="section retro" id="cyberverse">
      <CyberMover />
    </div>
  );
}
