import React from "react";
import { moveIndex, moveBack, moveNext } from './move';

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
                moveBack(props.mover);
              else if (props.dir === 'next')
                moveNext(props.mover);
            }}>
      <span aria-hidden className={"cybr-btn__glitch " + props.dir} />
      <span aria-hidden className="cybr-btn__tag">{pad(index,3)}</span>
    </button>
  );
}

export function MoveNav(props) {
  return (
    <nav className={"move-nav "
                  + ((props.focus !== false) ? 'focus ' : '')}>
      <MoveButton mover={props.mover} dir="back" />
      <MoveButton mover={props.mover} dir="next" />
    </nav>
  );
}

export function MoveSection(props) {
  return (
    <div id={"move-section-" + (props.id ? props.id : 'index')}
         className={"move-section "
                  + (props.active ? 'active' : '')}>
    {props.children}
    </div>
  );
}

export default function Mover(props) {
  return (
    <>
      <div id={props.id + "-mover"}
           className={"move " + (props.transition ? 'transition' : '')}>
        {props.children}
      </div>
    </>
  );
}
