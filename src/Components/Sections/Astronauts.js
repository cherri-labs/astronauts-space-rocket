import React from 'react';

export default function Astronauts() {
  return (
    <div className="section page" id="lonely-astronauts">
    <div class="fp-bg"></div>
    <div id="container">
    <div className="shooting-stars nw">
    {[...Array(50)].map((e, i) => <div className="star"></div>)}
    </div>
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
    NFTs inspired by <span className="neon">vaporwave</span> and
    {" "}<div className="stack" style={{"--stacks": 3}}>
    <span style={{"--index": 0}}>cyberpunk</span>
    <span style={{"--index": 1}}>cyberpunk</span>
    <span style={{"--index": 2}}>cyberpunk</span>
    </div>{" "}
    aesthetics,
	the demoscene and pop culture from the 90's and
    powered by the desire to leverage blockchain technology to
    bring building power to creators and a full-fledged
	immersive experience to everyone.
             </p>
    </div>
    </article>
    <article>
    <div className="slide">
    <p>
    <b>Free mint.</b>{" "}
    <strong>Space Buds</strong> owners are granted a free mint per NFT.
				   </p>
    </div>
    </article>
    <article>
    <div className="slide">
    <p>
    <strong>Astronauts</strong> are your ticket into the{" "}
    <a className="nav" href="#cyberverse">
    Cyberverse
    </a>
    , a dinamically growing ever-expanding
    digital reality—as well as to the{" "}
    <a className="nav" href="#astrobank">
    Astro Bank
    </a>{" "}
    <a target="_blank" href="https://github.com/cherri-labs/astrobank#mint">mint rewards</a>.
              </p>
    </div>
    </article>
    </div>
    <div className="nft">
    <img src="img/astronauts/1.png" alt="Lonely Astronaut" />
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
    </div>
  );
};
