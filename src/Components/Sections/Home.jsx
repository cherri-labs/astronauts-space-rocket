import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  return (
    <ParallaxLayer
      offset={0}
      speed={2.5}>
      <div id='p-stars'></div>
      <div className="section" id="home">
        <div className="bg"></div>
        <div id="container">
          <div id='p-stars2'></div>
          <div id='p-stars3'></div>
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
      </div>
    </ParallaxLayer>
  );
}
