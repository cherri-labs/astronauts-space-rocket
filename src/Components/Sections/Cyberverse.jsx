import React from 'react';
import Lasr from '../Icons/Lasr';

const Txt = () => {
  return (
    <div className="text card">
      <article>
        <h3>Cyberverse</h3>
        <p>
          Welcome to the{" "}
          <a className="nav" href="#cyber">
            Cyberverse
          </a>
          <i className="arrow right"></i>
          a dinamically growing ever-expanding
          digital reality.
          {" "}<strong className="glitch__sub">
            <span className="glitch__display">LASR NFTs</span>
            <span className="glitch__element">レーザー トークン</span>
          </strong>{" "}
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
        <Lasr type="full" glitch />
        <Txt />
      </div>
    </div>
  );
}

export default function Cyberverse() {
  return (
    <div className="section retro" id="cyberverse">
      <Container />
    </div>
  );
}
