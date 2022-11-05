import React from 'react';
import { PortalButton } from '../../Portal/Portal';
import setGlitch from '../../../glitchTransition';
import move from '../../Move/move';

export function Zoom(props) {
  const glitch = props.glitch;
  const mover = props.mover;
  const href = props.href;
  const index = props.index;

  return (
    <a className={'zoom ' + (glitch ? 'glitch ' : '')}
       onMouseOver={function() {
         if (glitch)
           setGlitch('.zoom.glitch', 200, 1, false, 6, 2000, false,);
       }}
       onClick={function() {move(mover, href, index);}}>
      {props.children}
    </a>
  );
}

export default function NftImg(props) {
  function Content() {
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

  return (<>
    {(
      props.portal ?
      <PortalButton mover={props.mover}
                    goto={props.href}
                    zoom={props.zoom}
                    glitch={props.hover}
                    anchor>
        <Content />
      </PortalButton>
      :
      <Zoom mover={props.mover}
            href={props.href}
            glitch={props.hover}>
        <Content />
      </Zoom>
    )}
        </>);
}
