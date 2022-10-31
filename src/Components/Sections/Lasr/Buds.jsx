import React from 'react';
import { MoveArrow } from '../../Move/MoveButton';
import NftImg, { Zoom } from './NftImg';
import NftCaption from './NftCaption';

export function BudImg(props) {
  return (
    <NftImg src="bud" opaque={props.opaque} glitch={props.glitch}>
    &nbsp;&nbsp;&nbsp;
    </NftImg>
  );
}

const Nft = () => {
  return (
    <div className="nft">
      <Zoom href="lasr" glitch>
        <BudImg glitch />
      </Zoom>
      <NftCaption type="border bar"
                  price="0.37"
                  whitelist="0.17"
                  freeMint="Early Bird"
                  mint="737"
                  supply="777"
                  reserve="40"
                  icons/>
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
