import React from 'react';
import { mouseOver, mouseLeave } from '../Labels/noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('dep-amount-note'));
}

function onLeave() {
  /* hide note */
  mouseLeave(document.getElementById('dep-amount-note'));
}

export default function DepositAmount(props) {
  const disabled = props.disabled;
  return (
    <input type="number" id="deposit-amount"
           onMouseOver={onOver}
           onMouseLeave={onLeave}
           onFocus={onLeave}
           placeholder="0"
           disabled={disabled}/>
  );
}
