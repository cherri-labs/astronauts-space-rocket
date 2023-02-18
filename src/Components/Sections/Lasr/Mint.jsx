import React from 'react';
import { Container, Content, Text } from '../Section';

const Txt = () => {
  return (
    <Text>
      <h3 className="sep h">Candy Machine</h3>
      <div id="candy-machine">
        <p>
          Just connect your wallet and mint.
        </p>
      </div>
    </Text>
  );
};

function Page() {
  return (
    <Container>
      <Content>
        <Txt />
      </Content>
    </Container>
  );
}

export default function Mint() {
  return (
    <div id="mint">
      <Page />
    </div>
  );
}
