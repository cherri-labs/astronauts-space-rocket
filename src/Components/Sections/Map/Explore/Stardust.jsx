import React from 'react';
import MapCard from '../MapCard';
import ExploreTitle from './ExploreTitle';
import fragNav from '../../../Move/fragNav';

export default function Stardust() {
  return (
    <div id="explore_stardust" className="fragment">
      <MapCard wrapperClass="glitched__container"
               fragment="explore" by="stardust" to="nav">
        <div className="glitched__text" id="glitch__this">Stardust</div>
        <p>
          <ExploreTitle>
            STARDUST
          </ExploreTitle>
          {" "}Introducing <strong>LASR</strong>{"'"}s latest venture:
          the <strong>STARDUST</strong> token. A tool that lets you get in on
          the ground floor of everything related to <strong>LASR</strong> and
          the{" "}
          <a className="strong more"
             onClick={function() {fragNav('explore', 'two', 'stardust');}}>
            2 virtual world.
          </a>
        </p>
        <p>
          This unique fungible
          token has been specifically designed to give users access to
          exclusive products and experiences, as well as discounts on
          services from trusted partners. Plus, it's built on top of the
          Solana blockchain,
          which grants its flexibility, efficiency and close to none gas fees.
        </p>
        <div className="container for__ct">
          <span className="cybr__tag">E003</span>
        </div>
      </MapCard>
    </div>
  );
}
