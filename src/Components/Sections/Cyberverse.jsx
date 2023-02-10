import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { Container, Content, Text } from './Section';
import Lasr from '../Icons/Lasr';
import MoveButton from '../Move/MoveButton';
import move from '../Move/move';
import fragNav from '../Move/fragNav';
//-sect
import Explore from './Map/Explore/Explore';

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
    <nav className="nav-container blocks sub-nav">
      <MoveButton id="move-button-cyber-nav-explore"
                  mover="cyber"
                  goto="explore_index"
                  onClick={function() {fragNav('explore', 'nav');}}
                  menu>
        <span>Explore</span><span>⬆</span>
      </MoveButton>
      <MoveButton id="move-button-cyber-nav-gallery"
                  mover="lasr"
                  goto="gallery_buds"
                  menu disabled>
        <span>Gallery</span><span>🖼</span>
      </MoveButton>
    </nav>
  );
}

function Index() {
  return (
    <MoveSection className="index__page" id="index" active>
      <Lasr />
      <Txt />
      <Nav />
    </MoveSection>
  );
}

function CyberMover() {
  return (
    <Mover id="cyber">
      <Index />
      <div className="map">
        <Explore />
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
