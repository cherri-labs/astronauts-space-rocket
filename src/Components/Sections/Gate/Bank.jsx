import React from 'react';
import { Container, Content, Text } from '../Section';
import DepositBox from './Boxes/DepositBox';
import DepositAmount from './Boxes/DepositAmount';
import WithdrawAmount from './Boxes/WithdrawAmount';
import BalanceLabel from './Labels/BalanceLabel';
import DepositButton from './Buttons/DepositButton';
import MaxButton from './Buttons/MaxButton';
import WithdrawButton from './Buttons/WithdrawButton';
import tab from '../../../tabs';
import setGlitch from '../../../glitchTransition';

const Txt = () => {
  return (
    <Text card>
      <h3>
        Astro Gate
      </h3>
      <p>
        Here you can withdraw your
        {" "}<a target="_blank" rel="noreferrer"
                href="https://github.com/cherri-labs/astrobank#mint">
        rewards</a>, all you need is
    a <strong>LASR NFT</strong> and your wallet.
      </p>
    </Text>
  );
};

function TabButton(props) {
  const id = props.id;
  const disabled = props.disabled;

  return (
    <button className={(props.active ? 'active ' : '') +
             (props.comingSoon ? 'coming-soon ' : '') +
             (disabled ? 'disabled ' : '')}
            id={id + '-btn'}
            onMouseOver={function() {
              if (disabled)
                setGlitch('#' + id + '-btn', 2000);
            }}
            onClick={function(){
              /* if tab is not specified fallback to id */
              tab(props.tab ? props.tab : props.id);
            }}>
      <span>{props.children}</span>
    </button>
  );
}

function BankNote(props) {
  const disabledMsg = "Please, come back after the mint.";

  return (
    <label id={props.tab + "-" + props.id + "-note"} className="note active">
      {(props.disabled ? disabledMsg : props.children)}
    </label>
  );
}

function BankSpace(props) {
  const disabled = props.disabled;

  return (
    <div className={'bank focus space ' +
                                (disabled ? 'disabled' : '')}>
      <div id="tabs-container">
        <div id="tabs-bar">
          <TabButton id="deposit" comingSoon disabled>
            Deposit
          </TabButton>
          <TabButton id="withdraw" active>
            Withdraw
          </TabButton>
        </div>
      </div>
      <form className="tab" id="deposit">
        <BankNote tab="dep" id="account">
          Deposit account (default is current wallet)
        </BankNote>
        <BankNote tab="dep" id="amount">
          Amount to deposit
        </BankNote>
        <div className="textbox">
          <DepositBox disabled={disabled} />
        </div>
        <div className="textbox">
          <DepositAmount disabled={disabled} />
          <label htmlFor="deposit-amount">◎</label>
        </div>
        <DepositButton />
      </form>
      <form className="tab active" id="withdraw">
        <BankNote tab="withd" id="amount">
          Amount to withdraw
        </BankNote>
        <BankNote tab="withd" id="balance">
          Account balance
        </BankNote>
        <div className="textbox">
          <WithdrawAmount disabled={disabled} />
          <div className="right inset-box">
            <MaxButton />
            <label htmlFor="withdraw-amount" className="inset">◎</label>
          </div>
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
  );
}

class Gate extends React.Component {
  render() {
    return (
      <div className="bank-container">
        <BankSpace disabled />
      </div>
    );
  }
}

function Page() {
  return (
    <Container>
      <Content>
        <Txt />
        <Gate />
      </Content>
    </Container>
  );
}

export default function Bank() {
  return (
    <div id="bank">
      <Page />
    </div>
  );
}
