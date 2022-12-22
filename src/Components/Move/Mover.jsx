import React, { useEffect, useCallback } from 'react';
import move, { moveIndex, moveBack, moveNext, navNext, navBack } from './move';

/* amount of wheel events before trigger (length of scroll) */
const wheelSensitivity = 8;
/* sensitivity multiplication factor for horizontal/vertical scrolling */
const verticalMultiplier = 1;
const horizontalMultiplier = 1;
const wheelDelay = 500; // ms delay between wheel event triggers
let wheelTrack = 0; // wheel event delta tracker
let aborted = false; // wheel listener state tracker

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

function CybrBtn(props) {
  const mover = props.mover + '-mover';
  const index = moveIndex() + (props.dir === 'back' ? -1 : 1);

  return (
    <button className="cybr-btn"
            onClick={function(){
              if (props.dir === 'back')
                moveBack(mover);
              else if (props.dir === 'next')
                moveNext(mover);
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
      <CybrBtn mover={props.mover} dir="back" />
      <CybrBtn mover={props.mover} dir="next" />
    </nav>
  );
}

export function MoveSection(props) {
  const sectionId = "move-section-" + (props.id ? props.id : 'index');
  let section;

  function wheelListener(toggle = true) {
    if (toggle)
      section.addEventListener('wheel', wheelCallback, true);
    else
      section.removeEventListener('wheel', wheelCallback, true);
  }

  function wheelReset(callback) {
    if (!aborted) {
      wheelTrack = 0;
      aborted = true;
      wheelListener(false);

      /* override callback function with props.mover */
      if (props.mover) {
        move(props.mover, 'move-section-' + props.to);
      } else {
        callback();
      }

      setTimeout(()=>{
        wheelListener(true);
        aborted = false;
      }, wheelDelay); // reset event listener after interval
    }
  }

  /* move section mouse handler */
  const mouseCallback = useCallback(() => {
    wheelTrack = 0;
  });

  /* move section wheel handler */
  const wheelCallback = useCallback((e) => {
    if (e.deltaY > 0) { /* to top */
      if (!props.dir || props.dir === 'up' || props.dir === 'vertical') {
        const sens =  wheelSensitivity * verticalMultiplier;
        if (wheelTrack < 1 || wheelTrack > sens) {
          wheelTrack = 1;
        } else if (++wheelTrack >= sens) {
          wheelReset(navNext);
        }
      }
    } else if (e.deltaY < 0) { /* to bottom */
      if (!props.dir || props.dir === 'down' || props.dir === 'vertical') {
        const sens =  wheelSensitivity * verticalMultiplier;
        if (wheelTrack > -1 || wheelTrack < -1*sens) {
          wheelTrack = -1;
        } else if (--wheelTrack <= -1*sens) {
          wheelReset(navBack);
        }
      }
    } else if (e.deltaX > 0) { /* to left */
      if (!props.dir || props.dir === 'left' || props.dir === 'horizontal') {
        const sens =  wheelSensitivity * horizontalMultiplier;
        if (wheelTrack > -1*sens-1 || wheelTrack < -2*sens) {
          wheelTrack = -1*sens-1;
        } else if (--wheelTrack <= -2*sens) {
          wheelReset(moveNext);
        }
      }
    } else if (e.deltaX < 0) { /* to right */
      if (!props.dir || props.dir === 'right' || props.dir === 'horizontal') {
        const sens =  wheelSensitivity * horizontalMultiplier;
        if (wheelTrack < sens+1 || wheelTrack > 2*sens) {
          wheelTrack = sens+1;
        } else if (++wheelTrack >= 2*sens) {
          wheelReset(moveBack);
        }
      }
    }
  });

  useEffect(() => {
    if (props.wheel) {
      section = document.getElementById(sectionId);

      section.addEventListener('mousemove', mouseCallback);
      wheelListener();
    }
  }, []);

  return (
    <div id={sectionId}
         className={"move-section "
                  + (props.active ? 'active ' : '')
                  + (props.className)}>
      {props.children}
    </div>
  );
}

export default function Mover(props) {
  return (
    <>
      <div id={props.id + "-mover"}
           className={"move "
                    + (props.transition ? 'transition ' : '')}>
        {props.children}
      </div>
    </>
  );
}
