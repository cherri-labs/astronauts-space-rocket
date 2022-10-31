import React from 'react';
import setGlitch from '../../../glitchTransition';
import move from '../../Move/move';

export function Zoom(props) {
  const glitch = props.glitch;
  const href = props.href;

  return (
    <a className={'zoom ' + (glitch ? 'glitch ' : '')}
       onMouseOver={function() {
         if (glitch)
           setGlitch('.zoom.glitch', 200, 1, false, 6, 2000, false,);
       }}
       onClick={function() {move(href);}}>
      {props.children}
    </a>
  );
}

export default function NftImg(props) {
  return (
    <div className={(props.glitch ? 'glitch__img ' : '') +
                    'nft img ' +
                    props.src +
                       ((props.dim || props.opaque) ? ' opaque ' : '')}>
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
