import React from 'react';
import Portal, {
  PortalContainer,
  PortalButton,
  PortalTag,
} from '../../Portal/Portal';
import { AstronautImg } from './Astronauts';
import { BudImg } from './Buds';

function Container() {
  return (
    <div id="container">
      <div id="content">
        <h1>Select Player</h1>
        <PortalContainer>
          <Portal disabled>
            <PortalButton mover="lasr-mover"
                          goto="buds" anchor>
              <BudImg />
            </PortalButton>
            <PortalTag>
              <strong>Space Buds</strong>
            </PortalTag>
          </Portal>
          <Portal>
            <PortalButton mover="lasr-mover"
                          goto="astronauts" anchor>
              <AstronautImg />
            </PortalButton>
            <PortalTag>
              <strong>Lonely Astronauts</strong>
            </PortalTag>
          </Portal>
        </PortalContainer>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="index__page" id="gate__index">
      <Container />
    </div>
  );
}
