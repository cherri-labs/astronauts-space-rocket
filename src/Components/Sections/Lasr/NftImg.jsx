import React from 'react';

export default function NftImg(props) {
  return (
    <div className={"glitch__img " + props.src + " disabled"}>
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
    </div>
  );
}
