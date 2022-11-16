import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { Container, Content, Text } from './Section';
import Lasr from '../Icons/Lasr';
import MoveButton from '../Move/MoveButton';
import navMove from '../Move/navMove';

import World from './Roadmap/World';
import Vision from './Roadmap/Vision';
import Path from './Roadmap/Path';

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
           onClick={function(){navMove('lasr');}}>
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
    <nav className="nav-container blocks">
      <MoveButton id="move-button-nav-explore"
                  mover="cyber"
                  goto="world"
                  menu>
        Explore
      </MoveButton>
      <MoveButton id="move-button-nav-vision"
                  mover="cyber"
                  goto="vision"
                  menu>
        Vision
      </MoveButton>
      <MoveButton id="move-button-nav-goals"
                  mover="cyber"
                  goto="path"
                  menu>
        Goals
      </MoveButton>
    </nav>
  );
}

function Index() {
  return (
    <MoveSection active>
      <div className="index__page" id="cyberverse__index">
        <Content>
          <Lasr type="full" />
          <Txt />
          <Nav />
        </Content>
      </div>
    </MoveSection>
  );
}

function CyberMover() {
  return (
    <Mover id="cyber">
      <Index />
      <div className="map">
        <World />
        <Vision />
        <Path />
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
    <div className="section retro" id="cyber">
      <Page />
    </div>
  );
}
