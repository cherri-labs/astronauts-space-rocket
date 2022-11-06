import React from 'react';
import { MoveAnchor } from '../Move/MoveButton';

function Container() {
  return (
    <div id="container">
      <div id="welcome" className="title">
        <span>
          WELCOME ABOARD
        </span>
        <br/>
        <MoveAnchor mover="lasr" nav>
          <span>
            LASR
          </span>
          <br/>
          <i className="arrow logo"></i>
        </MoveAnchor>
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
