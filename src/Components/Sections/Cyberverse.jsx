import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { Container, Content, Text } from './Section';
import Lasr from '../Icons/Lasr';
import GlitchSpan from '../GlitchSpan';
import nav from '../Move/nav';
import lang from '../lang';

const Txt = () => {
  return (
    <Text card>
      <h3>
        <GlitchSpan id="cyberverse-title__glitch"
                    steps="2"
                    duration="0"
                    delay="100"
                    write={lang["cyberverse"]}>
          Cyberverse
        </GlitchSpan>
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
           onClick={function(){nav('lasr');}}>
          LASR NFTs
        </a>{" "}
        are your all-access pass. They allow you to freely explore
        all new features and released products.
      </p>
    </Text>
  );
};

function Page() {
  return (
    <Container>
      <Content>
        <Lasr nav="home" type="full" tilt />
        <Txt />
      </Content>
    </Container>
  );
}

function CyberMover() {
  return (
    <Mover id="cyberverse">
      <MoveSection active>
        <div className="index__page" id="cyberverse__index">
          <Page />
        </div>
      </MoveSection>
    </Mover>
  );
}

export default function Cyberverse() {
  return (
    <div className="section retro" id="cyberverse">
      <CyberMover />
    </div>
  );
}
