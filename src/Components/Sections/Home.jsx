import React from 'react';
import nav from '../Move/move';

function Container() {
  return (
    <div id="container">
      <div id="welcome" className="title">
        <span>
          WELCOME ABOARD
        </span>
        <br/>
        <a onClick={function(){nav('lasr');}}>
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

class Home extends React.Component {
  render() {
    return (
      <div className="section fullscreen active" id="home">
        <Container />
      </div>
    );
  }
}
export default Home;
