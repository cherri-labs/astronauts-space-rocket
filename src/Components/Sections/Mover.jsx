import React from "react";
import { moveBack, moveNext } from './move';

const moverId = "map-mover";

export function MoveNav() {
  return (
    <nav className="move-nav">
      <button onClick={function(){moveBack(moverId);}}>Back</button>
      <button onClick={function(){moveNext(moverId);}}>Next</button>
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
