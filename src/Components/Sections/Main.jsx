import React from 'react';

import Home from './Home';
import Lasr from './Lasr/Lasr';
import Gate from './Gate/Gate';
import Cyberverse from './Cyberverse';
import Stars from '../Stars';

class Main extends React.Component {
  render() {
    return (
      <>
        <Home />
        <Lasr />
        <Gate />
        <Cyberverse />
        <Stars />
      </>
    );
  }
}
export default Main;
