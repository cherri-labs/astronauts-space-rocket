import React from 'react';
import move from './move';
import nav from './nav';
import { menu } from './SideMenu';

/* call required move function */
function callMove(props, mover, goto) {
  /* if active */
  if (!props.disabled) {
    if (props.menu) {
      /* use menu move call */
      menu.move(mover, goto);
    } else if (!props.nav) {
      /* move to section */
      move(mover + "-mover", "move-section-" + goto);
    } else {
      /* use fallback nav function */
      nav(mover);
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

  return (
    <button id={props.id}
            className={props.className}
            onClick={function() {
              /* call move to section */
              callMove(props, mover, goto);
            }}>
      {props.children}
    </button>
  );
}
