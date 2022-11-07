import React from "react";

import Mover from '../../Move/Mover';
import { Container, Content } from '../Section';
import World from './World';
import Vision from './Vision';
import Path from './Path';

function Page() {
  return (
    <Container>
      <Content>
        <Mover id="roadmap" transition>
          <World />
          <Vision />
          <Path />
        </Mover>
      </Content>
    </Container>
  );
}

export default function Roadmap() {
  return (
    <div className="section lights-out" id="roadmap">
      <Page />
    </div>
  );
}
