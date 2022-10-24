import React from 'react';

import DepositBox from '../../Boxes/DepositBox';
import DepositAmount from '../../Boxes/DepositAmount';
import WithdrawAmount from '../../Boxes/WithdrawAmount';
import BalanceLabel from '../../Labels/BalanceLabel';
import DepositButton from '../../Buttons/DepositButton';
import MaxButton from '../../Buttons/MaxButton';
import WithdrawButton from '../../Buttons/WithdrawButton';

import tab from '../../../tabs';

const Txt = () => {
  return (
    <div className="text">
      <article>
        <p>
          Here you can withdraw your
          {" "}<a target="_blank" rel="noreferrer"
                  href="https://github.com/cherri-labs/astrobank#mint">
          mint rewards</a>, all you need is
    a <strong>LASR NFT</strong> inside your wallet.
        </p>
      </article>
    </div>
  );
};

const Gate = () => {
  return (
    <div className="bank-container">
      <div className="bank">
        <div id="tabs-container">
          <div id="tabs-bar">
            <button className="coming-soon disabled"
                    id="deposit-btn"
                    onClick={function(){tab('deposit');}}>
              <span>Deposit</span>
            </button>
            <button className="active"
                    id="withdraw-btn"
                    onClick={function(){tab('withdraw');}}>
              <span>Withdraw</span>
            </button>
          </div>
        </div>
        <form className="tab" id="deposit">
          <label id="dep-account-note" className="note active">
            Deposit account (default is current wallet)
          </label>
          <label id="dep-amount-note" className="note active">
            Amount to deposit
          </label>
          <div className="textbox">
            <DepositBox />
          </div>
          <div className="textbox">
            <DepositAmount />
            <label htmlFor="deposit-amount">◎</label>
          </div>
          <DepositButton />
        </form>
        <form className="tab active" id="withdraw">
          <label id="withd-amount-note" className="note active">
            Amount to withdraw
          </label>
          <label id="withd-balance-note" className="note active">
            Account balance
          </label>
          <div className="textbox">
            <WithdrawAmount />
            <label htmlFor="withdraw-amount" className="inset">◎</label>
            <MaxButton />
          </div>
          <BalanceLabel />
          <WithdrawButton />
        </form>
        <span className="footnote">
          <a target="_blank" rel="noreferrer"
             className="what-is-this"
             href="https://github.com/cherri-labs/astrobank">
            <span className="hover" />
          </a>
        </span>
      </div>
    </div>
  );
};

function Container() {
  return (
    <div id="container">
      <div id="content">
        <Txt />
        <Gate />
      </div>
    </div>
  );
}

export default function Bank() {
  return (
    <div id="bank">
      <Container />
    </div>
  );
}
