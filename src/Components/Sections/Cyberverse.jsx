import React from 'react';
import Lasr from '../Icons/Lasr';

const Txt = () => {
  return (
    <div className="text card">
      <article>
        <h1>Cyberverse</h1>
        <p>
          Welcome to the{" "}
          <a className="nav" href="#cyber">
            Cyberverse
          </a>
          <i className="arrow right"></i>
          a dinamically growing ever-expanding
          digital reality. <strong>LASR NFTs</strong> are your
          all-access pass. They allow you to freely explore all new
          features and released products. Collectors can also expect
          access to exclusive airdrops as well as <a target="_blank" rel="noreferrer" href="https://github.com/cherri-labs/astrobank#mint">their share of
                                                    reward fees</a> through the{" "}
          <a className="nav" href="#bank">
            Astro Bank
          </a>.
        </p>
      </article>
    </div>
  );
};

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Lasr type="full" />
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
