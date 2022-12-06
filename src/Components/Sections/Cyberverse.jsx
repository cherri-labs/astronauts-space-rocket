import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { Container, Content, Text } from './Section';
import Lasr from '../Icons/Lasr';
import MoveButton from '../Move/MoveButton';
import Pointer from './Map/Pointer';
import move from '../Move/move';

import Explore from './Map/Explore/Explore';
import Vision from './Map/Vision/Vision';
import Goals from './Map/Goals/Goals';

const Txt = () => {
  return (
    <Text card>
      <h3>
        Cyberverse
      </h3>
      <p>
        Welcome to the{" "}
        <a className="strong">
          Cyberverse
        </a>
        <i className="arrow right"></i>
        a dinamically growing ever-expanding
        digital reality.{" "}
        <a className="strong"
           onClick={function(){move('lasr');}}>
          LASR NFTs
        </a>{" "}
        are your all-access pass. They allow you to freely explore
        all new features and released products.
      </p>
    </Text>
  );
};

function Nav() {
  return (
    <nav className="nav-container blocks"
         onClick={function(e) {
           if (!e.target.classList.contains('disabled'))
             document.getElementById("cyber").classList.add('fullscreen');
         }}>
      <MoveButton id="move-button-nav-explore"
                  mover="cyber"
                  goto="explore_index"
                  menu>
        Explore
      </MoveButton>
      <MoveButton id="move-button-nav-vision"
                  mover="cyber"
                  goto="vision_index"
                  menu disabled>
        Vision
      </MoveButton>
      <MoveButton id="move-button-nav-goals"
                  mover="cyber"
                  goto="goals_index"
                  menu disabled>
        Goals
      </MoveButton>
    </nav>
  );
}

function Index() {
  return (
    <MoveSection className="index__page" id="index" active>
      <Content>
        <Lasr />
        <Txt />
        <Nav />
      </Content>
    </MoveSection>
  );
}

function CyberMover() {
  return (
    <Mover id="cyber">
      <Index />
      <div className="map">
        <Explore />
        <Vision />
        <Goals />
        <Pointer id="map" to="esc" dir="left" mover="cyber" />
      </div>
    </Mover>
  );
}

function Page() {
  return (
    <Container>
      <Content>
        <CyberMover/>
      </Content>
    </Container>
  );
}

export default function Cyberverse() {
  return (
    <div className="section retro transition" id="cyber">
      <Page />
    </div>
  );
}
