import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { Container, Content, Text } from './Section';
import Lasr from '../Icons/Lasr';
import GlitchSpan from '../GlitchSpan';
import nav from '../Move/nav';

const Txt = () => {
  return (
<Text card>
    <h3>Cyberverse</h3>
        <p>
          Welcome to the{" "}
          <a className="strong">
            <GlitchSpan id="cyberverse__glitch" write="レーザー トークン">
              Cyberverse
            </GlitchSpan>
          </a>
          <i className="arrow right"></i>
          a dinamically growing ever-expanding
          digital reality.{" "}
          <a className="strong"
             onClick={function(){nav('lasr');}}>
            <GlitchSpan id="lasr__glitch" write="レーザー トークン">
              LASR NFTs
            </GlitchSpan>
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
