import React from 'react';
import { MoveArrow } from '../../Menu/MoveButton';
import NftImg from './NftImg';

export function BudImg(props) {
  return (
    <NftImg src="bud" glitch={props.glitch}>
    &nbsp;&nbsp;&nbsp;
    </NftImg>
  );
}

const Nft = () => {
  return (
    <div className="nft">
      <BudImg glitch />
      <div className="caption">
        <div className="column">
          <p>
            <b>Mint price:</b> 0.37 ◎
          </p>
          <p>
            <b>Whitelist:</b> 0.17 ◎
          </p>
          <p>
            <b>Early bird:</b> free mint
          </p>
        </div>
        <div className="column">
          <p>
            <b>Mint supply:</b> 737
          </p>
          <p>
            <b>Total supply:</b> 777
          </p>
          <p>
            <b>Reserve:</b> 40
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
        <h1>Space Buds</h1>
        <p>
          777 generative friendly <a>Space Buds</a> cruisin'
          thru the <i>cybergalaxy</i>. Created with the conjunction
          of AI and Python, <strong>Space Buds</strong> pioneer the
          technological advancement that is key to our rapidly
          evolving way of life.
        </p>
      </article>
    </div>
  );
};

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Nft />
        <Txt />
      </div>
      <MoveArrow dir="right"
        id="buds"
        mover="lasr-mover"
        goto="astronauts"/>
    </div>
  );
}

export default function Buds() {
  return (
    <div id="buds">
      <Container />
    </div>
  );
}
