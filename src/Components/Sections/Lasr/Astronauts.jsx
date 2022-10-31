import React from 'react';
import { MoveArrow } from '../../Move/MoveButton';
import NftImg, { Zoom } from './NftImg';
import NftCaption from './NftCaption';

export function AstronautImg(props) {
  return (
    <NftImg src="astronaut" opaque={props.opaque} glitch={props.glitch} />
  );
}

const Nft = () => {
  return (
    <div className="nft">
      <Zoom href="lasr" glitch>
        <AstronautImg glitch />
      </Zoom>
      <NftCaption type="border bar"
                  price="1"
                  whitelist="0.64"
                  freeMint="Owners"
                  mint="7168"
                  supply="8192"
                  reserve="1024"
                  icons/>
    </div>
  );
};

const Txt = () => {
  return (
    <div className="text">
      <article>
        <h1>Lonely<br/>Astronauts</h1>
        <p>
          A collection of 8192 <a>Lonely Astronaut</a> NFTs
          inspired by <span className="neon more">vaporwave</span> and{" "}
          <span className="stack" style={{"--stacks": 3}}>
            <span className="more" style={{"--index": 0}}>cyberpunk</span>
            <span className="more" style={{"--index": 1}}>cyberpunk</span>
            <span className="more" style={{"--index": 2}}>cyberpunk</span>
          </span>{" "}
          aesthetics, the demoscene and pop culture from the 80's and
          powered by the desire to leverage blockchain technology to
          bring building power to creators and a full-fledged
          immersive experience to everyone.
        </p>
      </article>
    </div>
  );
};

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Txt />
        <Nft />
      </div>
      <MoveArrow dir="left"
                 id="astronauts"
                 mover="lasr-mover"
                 goto="buds"/>
    </div>
  );
}

export default function Astronauts() {
  return (
    <div id="astronauts">
      <Container />
    </div>
  );
}
