import React from 'react';
import Mover, { MoveSection } from '../Move/Mover';
import { Container, Content, Text } from './Section';
import navMove from '../Move/navMove';

const Txt = () => {
  return (
    <Text card>
      <h4>
        Out of bounds
      </h4>
      <p>
        We're sorry but the docs are out of reach. You can consult our
        {" "}
        <a className="strong"
           onClick={function(){navMove('cyberverse');}}>
          Cyberverse
        </a>{" "}
        manual in the meantime or check our
        {" "}<a className="strong" target="_blank" rel="noreferrer"
                href="https://github.com/cherri-labs/astrobank">
          GitHub
        </a>{" "}
        documentation.
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

function DocsMover() {
  return (
    <Mover id="docs">
      <MoveSection active>
        <div className="index__page" id="docs__index">
          <Page />
        </div>
      </MoveSection>
    </Mover>
  );
}

export default function Docs() {
  return (
    <div className="section retro" id="docs">
      <DocsMover />
    </div>
  );
}
