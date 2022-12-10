import React from 'react';
import move from './move';
import navMove from './navMove';
import { menu } from './SideMenu';
import setGlitch from '../../glitchTransition';

/* call required move function */
function callMove(props, mover, goto, index = 0) {
  /* if active */
  if (!props.disabled) {
    if (props.menu) {
      /* use menu move call */
      menu.move(mover, goto, index);
    } else {
      /* nav to mover */
      navMove(mover);

      if (!props.nav || goto) {
        /* move to section */
        move(mover + "-mover", "move-section-" + goto, index);
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
  const index = props.index;

  return (
    <a id={props.id}
       className={props.className}
       onClick={function() {
         /* call move to section */
         callMove(props, mover, goto, index);
       }}>
      {props.children}
    </a>
  );
}

export default function MoveButton(props) {
  const mover = props.mover;
  const goto = props.goto;
  const index = props.index;
  const glitch = props.glitch;
  const disabled = props.disabled;
  const click = props.onClick;

  return (
    <button id={props.id}
            className={props.className
                     + ' move-button '
                     + (glitch ? ' glitch ' : '')
                     + (disabled ? ' disabled ' : '')}
            disabled={disabled}
            onClick={function() {
              if (glitch)
                setGlitch('.menu button.glitch', 400, 1, true, 6, 2000, false,);
              if (!disabled) {
                /* call move to section */
                callMove(props, mover, goto, index);
                if (click) click();
              }
            }}>
      {props.children}
    </button>
  );
}
