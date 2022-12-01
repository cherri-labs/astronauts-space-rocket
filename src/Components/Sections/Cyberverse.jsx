import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { Container, Content, Text } from './Section';
import Lasr from '../Icons/Lasr';
import MoveButton from '../Move/MoveButton';
import move, { moveNext } from '../Move/move';

import Explore from './Map/Explore';
import Vision from './Map/Vision';
import Path from './Map/Path';

function goBack() {
  document.getElementById("cyber").classList.remove('fullscreen');
  move('cyber-mover');
}

function goForward() {
  moveNext('cyber-mover');
}

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
         onClick={function(){
           document.getElementById("cyber").classList.add('fullscreen');
         }}>
      <MoveButton id="move-button-nav-explore"
                  mover="cyber"
                  goto="explore_neotowns"
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
    <MoveSection className="index__page" id="index" active>
      <Content>
        <Lasr type="full" />
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
        <Path />
        <button id="map__esc"
                className="map__pointer pointer-arrow left"
                onClick={goBack} />
        <button id="map__forward"
                className="map__pointer pointer-arrow right"
                onClick={goForward} />
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
