import React from 'react';

export default function NftImg(props) {
  return (
    <div className={(props.glitch ? 'glitch__img ' : '') +
                    "nft img " +
                    props.src +
                    " opaque "}>
      {(props.glitch ? <>
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
        <div className="glitch__text">
          {props.children}
          <span className="rendering"></span>
          <span className="progress dots"></span>
        </div>
      </> : '')}
    </div>
  );
}
