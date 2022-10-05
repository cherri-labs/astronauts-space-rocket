import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

function AstronautImg() {
  return <img src="img/astronauts/1.gif" alt="Lonely Astronaut" />;
}

export default function Astronauts() {
  return (
    <>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        className="section retro"
        id="astronauts">
        <div id="container">
          <div className="shooting-stars ne">
            {[...Array(10)].map((e,i) => <div key={i} className="star"></div>)}
          </div>
          <div id='p-stars2'></div>
          <div id='p-stars3'></div>
          <div id="content">
            <div className="text">
              <h1>Lonely<br/>Astronauts</h1>
              <article>
                <div className="slide">
                  <p>
                    A collection of 8192
                    {" "}<a className="nav" href="#astronauts">
     Lonely Astronaut
   </a>{" "}
                    NFTs inspired by <span className="neon more">vaporwave</span> and
                    {" "}<span className="stack" style={{"--stacks": 3}}>
                                                 <span className="more" style={{"--index": 0}}>cyberpunk</span>
                                                 <span className="more" style={{"--index": 1}}>cyberpunk</span>
                                                 <span className="more" style={{"--index": 2}}>cyberpunk</span>
                                               </span>{" "}
                    aesthetics,
                    the demoscene and pop culture from the 90's and
                    powered by the desire to leverage blockchain technology to
                    bring building power to creators and a full-fledged
                    immersive experience to everyone.
                  </p>
                </div>
              </article>
              <article>
                <div className="slide nft mobile">
                  <AstronautImg />
                </div>
              </article>
            </div>
            <div className="nft desktop">
              <AstronautImg />
              <div className="caption">
                <div className="column">
                  <p>
                    <b>Mint price:</b> 1 ◎
                  </p>
                  <p>
                    <b>Whitelist:</b> 0.64 ◎
                  </p>
                  <p>
                    <b>Owners:</b> free mint
                  </p>
                </div>
                <div className="column">
                  <p>
                    <b>Mint supply:</b> 7168
                  </p>
                  <p>
                    <b>Total supply:</b> 8192
                  </p>
                  <p>
                    <b>Reserve:</b> 1024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
}
