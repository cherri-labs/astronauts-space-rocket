import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

export default function Cyberverse() {
  return (
    <ParallaxLayer
      offset={4}
      speed={0.5}>
      <div className="section retro" id="cyberverse">
        <div className="mild blue bg"></div>
        <div className="pc-wrap" id="container">
          <div id='p-stars2'></div>
          <div id='p-stars3'></div>
          <div id="content">
            <div className="lasr">
              <a href="#home">
                <i className="arrow logo full"></i>
              </a>
            </div>
            <div className="text">
              <h1>Cyberverse</h1>
              <article>
                <div className="slide">
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
                </div>
              </article>
            </div>
          </div>
          <div className='top-plane'></div>
          <div className='bottom-plane'></div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
