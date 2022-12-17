import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { MoveAnchor } from '../Move/MoveButton';
import writeTitle from './Lasr/writeTitle';

function Container() {
  return (
    <div id="container">
      <div id="welcome" className="title">
        <span>
          WELCOME ABOARD
        </span>
        <br/>
        <MoveAnchor mover="lasr"
                    onClick={writeTitle}>
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
        <Mover id="home">
          <MoveSection className="index__page" id="home" active>
            <Container />
          </MoveSection>
        </Mover>
      </div>
    );
  }
}
export default Home;
