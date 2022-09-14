import { mouseOver, mouseLeave } from './noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('withd-amount-note'));
}

function onLeave() {
  /* hide note */
  mouseLeave(document.getElementById('withd-amount-note'));
}

export default function WithdrawAmount() {
  return (
    <input type="number" id="withdraw-amount"
    onMouseOver={onOver}
    onMouseLeave={onLeave}
    onFocus={onLeave}
    placeholder="0"/>
  );
};
