import React from 'react';
import move, { moveNext } from '../../Move/move';
import fragNav from '../../Move/fragNav';

let pointer = [];

function toggleFull(full, mover) {
  if (!full)
    document.getElementById(mover).classList.remove('fullscreen');
}

pointer.frag = function(fragSect, to='nav', full=true, mover) {
  toggleFull(full, (mover || fragSect));
  fragNav(fragSect, to);
}

pointer.esc = function(mover, section='index', full=false) {
  toggleFull(full, mover);
  move(mover + '-mover', 'move-section-' + section);
}

pointer.forward = function(mover) {
  moveNext(mover + '-mover');
}

export default function Pointer(props) {
  const tag = props.name || props.to;

  return (
    <button id={(props.id || props.frag) + '__' + tag}
            className={'map__pointer pointer-arrow '
                     + props.dir + ' '
                     + (props.only ? 'only ' : '')
                     + tag}
            onClick={function() {
              if (props.frag)
                pointer[props.to](props.frag, props.dest, props.fullscreen, props.mover);
              else
                pointer[props.to](props.mover, props.section, props.fullscreen)
            }} />
  );
}
