import React from 'react';
import AmountBox from './AmountBox';
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
    <AmountBox id="deposit"
               onOver={onOver}
               onLeave={onLeave}
               disabled={disabled} />
  );
}
