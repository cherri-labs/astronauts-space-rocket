import React from 'react';
import move from './move';
import nav from './nav';
import { menu } from './SideMenu';
import setGlitch from '../../glitchTransition';

/* call required move function */
function callMove(props, mover, goto) {
  /* if active */
  if (!props.disabled) {
    if (props.menu) {
      /* use menu move call */
      menu.move(mover, goto);
    } else {
      /* nav to mover */
      nav(mover);

      if (!props.nav || props.goto) {
        /* move to section */
        move(mover + "-mover", "move-section-" + goto);
      }
    }
  }
}

export function MoveArrow(props) {
  return (
    <MoveButton id={'move-arrow-' + (props.id ? props.id : props.mover)}
                className={props.dir + ' move-arrow arrow ' + props.className}
                mover={props.mover}
                goto={props.goto}
                disabled={props.disabled}>
      {props.children}
    </MoveButton>
  );
}

export function MoveAnchor(props) {
  const mover = props.mover;
  const goto = props.goto;

  return (
    <a id={props.id}
       className={props.className}
       onClick={function() {
         /* call move to section */
         callMove(props, mover, goto);
       }}>
      {props.children}
    </a>
  );
}

export default function MoveButton(props) {
  const mover = props.mover;
  const goto = props.goto;
  const glitch = props.glitch;
  const disabled = props.disabled;

  return (
    <button id={props.id}
    className={props.className
             + (glitch ? ' glitch ' : '')
             + (disabled ? ' disabled ' : '')}
    onClick={function() {
      if (glitch)
        setGlitch('.menu button.glitch', 400, 1, true, 6, 2000, false,);
      if (!disabled)
        /* call move to section */
        callMove(props, mover, goto);
    }}>
    {props.children}
    </button>
  );
}
