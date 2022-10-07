import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

function BudImg() {
  return (
    <div className="glitch__img bud disabled">
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
      <div className="glitch__text">
        &nbsp;&nbsp;&nbsp;
        <span className="rendering"></span>
        <span className="progress dots"></span>
      </div>
    </div>
  );
}

const Txt = () => {
  return (
    <div className="text">
      <h1>Space Buds</h1>
      <article>
        <p>
          777 generative friendly
          {" "}<a className="nav" href="#buds">
                 Space Buds
               </a>{" "}
          cruisin' thru the <i>cybergalaxy</i>.
          All but 12 handdrawn specimens were sistematically
          programmed. A total of 40 items will be
          reserved for team share, giveaways and airdrops to holders.
        </p>
      </article>
    </div>
  );
};

const Nft = () => {
  return (
    <div className="nft">
      <BudImg />
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

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Nft />
        <Txt />
      </div>
    </div>
  );
}

export default function Buds() {
  return (
    <ParallaxLayer
      offset={1.98}
      speed={0.8}>
      <div className="section retro" id="buds">
        <Container />
      </div>
    </ParallaxLayer>
  );
}
