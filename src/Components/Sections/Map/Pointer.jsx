import React from 'react';
import move, { moveNext } from '../../Move/move';

let pointer = [];

pointer.esc = function(mover, section='index', full=false) {
  if (!full)
    document.getElementById(mover).classList.remove('fullscreen');
  move(mover + '-mover', 'move-section-' + section);
}

pointer.forward = function(mover) {
  moveNext(mover + '-mover');
}

export default function Pointer(props) {
  const tag = props.name || props.to;

  return (
    <button id={props.id + '__' + tag}
            className={'map__pointer pointer-arrow '
                     + props.dir + ' '
                     + tag}
            onClick={function() {
              pointer[props.to](props.mover, props.section, props.fullscreen)}
            } />
  );
}
