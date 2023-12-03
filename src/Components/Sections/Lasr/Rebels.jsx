import React from 'react';
import MoveButton, { MoveArrow } from '../../Move/MoveButton';
import NftImg from './NftImg';
import NftCaption from './NftCaption';
import { Container, Content, Text } from '../Section';

export function RebelImg(props) {
  const href = props.href || 'rebels';

  return (
    <NftImg src="rebel"
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
      <RebelImg href="index" glitch zoom hoverglitch />
      <NftCaption type="bar"
                  price="?"
                  whitelist="?"
                  freeMint="Owners"
                  mint="????"
                  supply="????"
                  reserve="????"
                  icons/>
    </div>
  );
};

function Nav() {
  return (
    <nav className="nav-container blocks sub-nav rt-brdr">
      <MoveButton id="move-button-rebels-nav-mint"
                  mover="lasr"
                  goto="mint"
                  menu disabled>
        <span>Mint</span><span className="svg ext-link"></span>
      </MoveButton>
      <MoveButton id="move-button-rebels-nav-gallery"
                  mover="lasr"
                  goto="gallery_rebels"
                  menu disabled>
        <span>Gallery</span><span>🖼</span>
      </MoveButton>
    </nav>
  );
}

const Txt = () => {
  return (
    <Text>
      <h3 className="sep h">Cyber<br/>Rebels</h3>
      <p>
        A collection of Cyber Rebel NFTs.
      </p>
      <Nav />
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
                 id="rebels"
                 mover="lasr"
                 goto="buds"/>
    </Container>
  );
}

export default function Rebels() {
  return (
    <div id="rebels">
      <Page />
    </div>
  );
}

