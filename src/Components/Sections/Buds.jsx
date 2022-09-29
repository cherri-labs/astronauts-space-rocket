import React from 'react';

function BudCaption() {
  return (
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
  );
}

function BudImg() {
  return (
    <div className="glitch__img">
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
      <div className="glitch__item"></div>
    </div>
  );

/*
  return <img src="img/buds/1.png" alt="Space Bud" />;
*/
}

export default function Buds() {
  return (
    <div className="section page" id="space-buds">
      <div className="fp-bg"></div>
      <div id="container">
        <div className="shooting-stars nw">
          {[...Array(10)].map((e,i) => <div key={i} className="star"></div>)}
        </div>
        <div id="content">
          <div className="nft desktop">
            <BudImg />
            <BudCaption />
          </div>
          <div className="text">
            <h1>Space Buds</h1>
            <article>
              <div className="slide">
                <p>
                  777 friendly
                  {" "}<a className="nav" href="#astronauts">
                         Space Buds
                       </a>{" "}
                  cruisin' thru the <i>cybergalaxy</i>.
                  All but 12 generated programmatically — these last few being
                  handdrawn especially by our team. A total of 40 items will be
                  reserved for team share, giveaways and airdrops to holders.
                </p>
              </div>
            </article>
            <article>
              <div className="slide">
                <p>
                  <strong>Space Buds</strong> give you early access to the{" "}
                  <a className="nav" href="#cyberverse">
                    Cyberverse
                  </a>{" "}
                  and to the{" "}
                  <a className="nav" href="#astrobank">
                    Astro Bank
                  </a>.
                  Once staking is fully implemented a
                  staked <strong>Bud</strong> or <strong>Astronaut</strong> will
                  be required in order to participate in the{" "}
                  <a target="_blank" rel="noreferrer" href="https://github.com/cherri-labs/astrobank#mint">
                    bank rewards
                  </a>, but right now you can just claim your share.
                </p>
              </div>
            </article>
            <article>
              <div className="slide">
                <p>
                  They also grant you a{" "}
                  <a className="nav" href="#astronaut">
                    Lonely Astronaut
                  </a>{" "}
                  free mint for each token you own.</p>
              </div>
            </article>
            <article>
              <div className="slide nft mobile">
                <BudImg />
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
