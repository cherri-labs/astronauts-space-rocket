import React from 'react';
import { mouseOver, mouseLeave } from '../Labels/noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('withd-amount-note'));
}

function onLeave() {
  /* hide note */
  mouseLeave(document.getElementById('withd-amount-note'));
}

export default function WithdrawAmount(props) {
  const disabled = props.disabled;
  return (
    <input type="number" id="withdraw-amount"
           onMouseOver={onOver}
           onMouseLeave={onLeave}
           onFocus={onLeave}
           placeholder="0"
           disabled={disabled}/>
  );
}
