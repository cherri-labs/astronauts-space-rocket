import React from 'react';
import nav from '../../nav';

function Container() {
  return (
    <div id="container">
      <div id="welcome" className="title">
        <span>
          WELCOME ABOARD
        </span>
        <br/>
        <a onClick={function(){nav('astronauts');}}>
          <span>
            LASR
          </span>
          <br/>
          <i className="arrow logo"></i>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="section active" id="home">
      <Container />
    </div>
  );
}
