import React from 'react';
import AmountBox from './AmountBox';
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
    <AmountBox id="withdraw"
               onOver={onOver}
               onLeave={onLeave}
               disabled={disabled} />
  );
}
