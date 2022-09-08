import { mouseOver, mouseLeave, setText } from './noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('withd-amount-note'));

  /* null placeholder */
  setText(document.getElementById('withdraw-amount'), "");
}

function onLeave() {
  /* hide note */
  mouseLeave(document.getElementById('withd-amount-note'));

  /* set placeholder */
  setText(document.getElementById('withdraw-amount'), "0");
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
