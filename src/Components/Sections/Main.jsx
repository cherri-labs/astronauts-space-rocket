import React from 'react';

import Home from './Home';
import Lasr from './Lasr/Lasr';
import Gate from './Gate/Gate';
import Cyberverse from './Cyberverse';
import Roadmap from './Roadmap';
import Stars from './Stars';

class Main extends React.Component {
  render() {
    return (
      <>
        <Stars />
        <Home />
        <Lasr />
        <Gate />
        <Cyberverse />
        <Roadmap />
      </>
    );
  }
}
export default Main;
