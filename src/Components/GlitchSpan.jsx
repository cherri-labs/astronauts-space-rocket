import React from 'react';
import { write } from 'glitched-writer';

export default function GlitchSpan(props) {
  const id = props.id || 'glitch__span';
  const name = props.name || 'glitch__span';
  const selector = (props.to ?
                    '#' + props.to :
                    '#' + id + '.' + name);
  const steps = props.step || 4;
  const duration = props.duration || 80;
  const delay = props.delay || 800;
  const text = props.text || props.children;

  const options = {
    steps: [1, steps],
    interval: [duration, 180],
    delay: [0, delay],
  }

  const onHover = function () {
    write(props.write, selector, options)
  };

  const onLeave = function () {
    write(text, selector, options)
  };

  if (props.div) {
    return (
      <div id={id}
           className={name}
           onMouseOver={onHover}
           onMouseLeave={onLeave}>
        {props.children}
      </div>
    );
  } else {
    return (
      <span id={id}
            className={name}
            onMouseOver={onHover}
            onMouseLeave={onLeave}>
        {props.children}
      </span>
    );
  }
}
