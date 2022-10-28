import React from 'react';
import { MoveArrow } from '../../Menu/MoveButton';
import NftImg from './NftImg';

export function AstronautImg(props) {
  return (
    <NftImg src="astronaut" glitch={props.glitch} />
  );
}

const Nft = () => {
  return (
    <div className="nft">
      <AstronautImg glitch />
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
      <MoveArrow dir="left"
                 id="astronauts"
                 mover="lasr-mover"
                 goto="buds"/>
      <div id="content">
        <Txt />
        <Nft />
      </div>
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
