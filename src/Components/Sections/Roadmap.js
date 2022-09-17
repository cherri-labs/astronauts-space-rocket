import React from 'react';

export default function Cyberverse() {
  return (
    <div className="section page" id="roadmap">
    <div id="container">
    <div className="relativity-starfield">
    <div className="shooting-stars ne">
    {[...Array(50)].map((e, i) => <div className="star"></div>)}
    </div>
    </div>
    <div id="content">
    <div className="text">
    <div className="stack" style={{"--stacks": 3}}>
    <span style={{"--index": 0}}>ROADMAP</span>
    <span style={{"--index": 1}}>ROADMAP</span>
    <span style={{"--index": 2}}>ROADMAP</span>
    </div>
    <div className="map">
    <article>
    <div className="slide">
    <div className="card">
    <div id='p-stars'></div>
    <h3>Q1 &#183;&nbsp; Mainnet</h3>
    <ul>
    <li><strong>Astro Bank</strong> on Mainnet</li>
    <li>Cooler website</li>
    <li>Github page</li>
    </ul>
    </div>
    </div>
    </article>
    <article>
    <div className="slide">
    <div className="card">
    <div id='p-stars2'></div>
    <h3>Q2 &#183;&nbsp; Landing</h3>
    <ul>
    <li><strong>Space Buds</strong> public mint</li>
    <li>We release <strong>Space Commanders</strong> to the world</li>
    <li>Discord server</li>
    <li>Lock all funds from the mint in the <strong>Astro Bank</strong></li>
    </ul>
    </div>
    </div>
    </article>
    <article>
    <div className="slide">
    <div className="card locked">
    <div id='p-stars3'></div>
    <h3>Q3 &#183;&nbsp; Terraforming</h3>
    <ul>
    <li>Full d0x goes public</li>
    <li><strong>Space Rocket</strong></li>
    <li>We let go of <strong>Lonely Astronauts</strong></li>
    <li>Staking portal implementation for <strong>LASR</strong></li>
    </ul>
    </div>
    </div>
    </article>
    <article>
    <div className="slide">
    <div className="card locked">
    <div id='p-stars2'></div>
    <h3>Q4 &#183;&nbsp; Expansion</h3>
    <ul>
    <li><strong>Detached Aliens</strong> and <strong>Unhappy Clones</strong> join the club</li>
    <li>Official puzzle competition for owners</li>
    </ul>
    </div>
    </div>
    </article>
    <article>
    <div className="slide">
    <div className="card locked">
    <div id='p-stars'></div>
    <h3>Q5 &#183;&nbsp; Quest to Faraway</h3>
    <ul>
    <li>First glimpse into the <strong>LASR</strong> metaverse</li>
    <li><strong>$STRD</strong> token is airdropped to holders</li>
    <li>Instantiate voting mechanism for community decisions</li>
    </ul>
    </div>
    </div>
    </article>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};
