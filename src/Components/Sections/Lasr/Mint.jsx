import React from 'react';
import { Container, Content, Text } from '../Section';

const Txt = () => {
  return (
    <Text>
      <h3 className="sep h">Candy Machine</h3>
      <p>
        Just connect your wallet and mint.
      </p>
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
