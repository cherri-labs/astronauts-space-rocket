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
          <i className="arrow logo run-once"></i>
        </MoveAnchor>
      </div>
    </div>
  );
}

class Home extends React.Component {
  componentDidMount() {
    const logo = document.querySelector('.arrow.logo.run-once');
    if (logo)
      setTimeout(() => {
        logo.classList.remove('run-once');
      }, '2300');
  }

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
