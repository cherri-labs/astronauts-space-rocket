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

class Home extends React.Component {




/* fix this v */
  ComponentDidMount() {
    document.addEventListener('scroll', (e) => {
      alert(0);
      const home = document.getElementById("home");

      /* if scroll down on home */
      if (home.contains(e.target))
        alert("astronauts");
      else
        alert(1);
    });
  }














  render() {
    return (
      <div className="section fullscreen active" id="home">
        <Container />
      </div>
    );
  }
}
export default Home;
