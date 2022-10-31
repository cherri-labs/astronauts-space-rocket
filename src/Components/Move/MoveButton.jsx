import React from 'react';
import { menu } from './SideMenu';

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

export default function MoveButton(props) {
  const mover = props.mover;
  const goto = props.goto;

  return (
    <button id={props.id}
            className={props.className}
            onClick={function() {
              /* if active */
              if (!props.disabled)
                /* move to section */
                menu.move(mover, goto);
            }}>
      {props.children}
    </button>
  );
}
