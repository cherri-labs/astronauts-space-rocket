import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

function Container() {
  return (
    <div id="container">
      <div id="welcome" className='title'>
        <span>
          WELCOME ABOARD
        </span>
        <br/>
        <a href="#astronauts">
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
    <>
      <ParallaxLayer
        sticky={{start: 0, end: 5}}
        speed={2.5}
        className="home bg" />
      <ParallaxLayer
        offset={0}
        speed={2.5}
        className="section"
        id="home">
        <Container />
      </ParallaxLayer>
    </>
  );
}
