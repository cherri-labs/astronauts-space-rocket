import { mouseOver, mouseLeave, setText } from './noteDisplay';

function onOver() {
  /* view note */
  mouseOver(document.getElementById('dep-amount-note'));

  /* null placeholder */
  setText(document.getElementById('deposit-amount'), "");
}

function onLeave() {
  /* hide note */
  mouseLeave(document.getElementById('dep-amount-note'));

  /* set placeholder */
  setText(document.getElementById('deposit-amount'), "0");
}

export default function DepositAmount() {
  return (
    <input type="number" id="deposit-amount"
    onMouseOver={onOver}
    onMouseLeave={onLeave}
    onFocus={onLeave}
    placeholder="0"/>
  );
};
