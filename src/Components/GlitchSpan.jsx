import React from 'react';
import { write } from 'glitched-writer';

export default function GlitchSpan(props) {
  const id = (props.id ? props.id : 'glitch__span');
  const name = (props.name ? props.name : 'glitch__span');
  const selector = '#' + id + '.' + name;

  const options = {
    steps: [1,4],
    interval: [80, 180],
    delay: [0, 800],
  }

  const onHover = function () {
    write(props.write, selector, options)
  };

  const onLeave = function () {
    write(props.children, selector, options)
  };

  return (
    <span id={id}
          className={name}
          onMouseOver={onHover}
          onMouseLeave={onLeave}>
      {props.children}
    </span>
  );
}
