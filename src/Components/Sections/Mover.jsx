import React from "react";
import { moveIndex, moveBack, moveNext } from './move';

const moverId = "map-mover";

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

function MoveButton(props) {
  const index = moveIndex() + (props.dir === 'back' ? -1 : 1);

  return (
    <button className="cybr-btn"
            onClick={function(){
              if (props.dir === 'back')
                moveBack(moverId);
              else if (props.dir === 'next')
                moveNext(moverId);
            }}>
      <span aria-hidden className={"cybr-btn__glitch " + props.dir} />
      <span aria-hidden className="cybr-btn__tag">{pad(index,3)}</span>
    </button>
  );
}

export function MoveNav() {
  return (
    <nav className="move-nav">
      <MoveButton dir="back" />
      <MoveButton dir="next" />
    </nav>
  );
}

export default function Mover(props) {
  return (
    <>
      <div id={moverId} className="move">
        {props.children}
      </div>
    </>
  );
}
