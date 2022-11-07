import React from 'react';
import { MoveArrow } from '../../Move/MoveButton';
import NftImg from './NftImg';
import NftCaption from './NftCaption';
import { Container, Content, Text } from '../Section';

export function AstronautImg(props) {
  const href = props.href || 'astronauts';

  return (
    <NftImg src="astronaut"
            mover="lasr"
            opaque={props.opaque}
            glitch={props.glitch}
            href={href}
            zoom={props.zoom}
            hover={props.hover}
            portal={props.portal}
            anchor/>
  );
}

const Nft = () => {
  return (
    <div className="nft">
      <AstronautImg href="index" glitch zoom hover />
      <NftCaption type="middle bar"
                  price="1"
                  whitelist="0.64"
                  freeMint="Owners"
                  mint="7168"
                  supply="8192"
                  reserve="1024"
                  icons/>
    </div>
  );
};

const Txt = () => {
  return (
    <Text>
      <h1>Lonely<br/>Astronauts</h1>
      <p>
        A collection of 8192 <a>Lonely Astronaut</a> NFTs
        inspired by <span className="neon more">vaporwave</span> and{" "}
        <span className="stack" style={{"--stacks": 3}}>
          <span className="more" style={{"--index": 0}}>cyberpunk</span>
          <span className="more" style={{"--index": 1}}>cyberpunk</span>
          <span className="more" style={{"--index": 2}}>cyberpunk</span>
        </span>{" "}
        aesthetics, the demoscene and pop culture from the 80's and
        powered by the desire to leverage blockchain technology to
        bring building power to creators and a full-fledged
        immersive experience to everyone.
      </p>
    </Text>
  );
};

function Page() {
  return (
    <Container>
      <Content>
        <Txt />
        <Nft />
      </Content>
      <MoveArrow dir="left"
                 id="astronauts"
                 mover="lasr"
                 goto="buds"/>
    </Container>
  );
}

export default function Astronauts() {
  return (
    <div id="astronauts">
      <Page />
    </div>
  );
}
