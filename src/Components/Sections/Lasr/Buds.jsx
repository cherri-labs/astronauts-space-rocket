import React from 'react';
import { MoveArrow } from '../../Move/MoveButton';
import NftImg from './NftImg';
import NftCaption from './NftCaption';
import { Container, Content, Text } from '../Section';

export function BudImg(props) {
  const href = props.href || 'buds';

  return (
    <NftImg src="bud"
            mover="lasr"
            opaque={props.opaque}
            glitch={props.glitch}
            href={href}
            zoom={props.zoom}
            hoverglitch={props.hoverglitch}
            portal={props.portal}
            anchor/>
  );
}

const Nft = () => {
  return (
    <div className="nft">
      <BudImg href="index" glitch zoom hoverglitch />
      <NftCaption type="bar"
                  price="0.37"
                  whitelist="0.17"
                  freeMint="Early Bird"
                  mint="737"
                  supply="777"
                  reserve="40"
                  icons/>
    </div>
  );
};

const Txt = () => {
  return (
    <Text>
      <h3 className="sep h">Space Buds</h3>
      <p>
        777 generative <a>Space Buds</a> cruising
        through the cyber world. Created with the conjunction
        of AI and Python, <strong>Space Buds</strong> pioneer the
        technological advancement that is key to our rapidly
        evolving way of life.
      </p>
    </Text>
  );
};

function Page() {
  return (
    <Container>
      <Content>
        <Nft />
        <Txt />
      </Content>
      <MoveArrow dir="right"
                 id="buds"
                 mover="lasr"
                 goto="astronauts"/>
    </Container>
  );
}

export default function Buds() {
  return (
    <div id="buds">
      <Page />
    </div>
  );
}
