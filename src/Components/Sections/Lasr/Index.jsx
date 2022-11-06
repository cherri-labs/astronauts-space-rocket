import React from 'react';
import Portal, {
  PortalContainer,
  PortalTag,
} from '../../Portal/Portal';
import { AstronautImg } from './Astronauts';
import { BudImg } from './Buds';
import move from '../../Move/move';

function Container() {
  return (
    <div id="container">
      <div id="content">
        <h1 className="neon"
            onClick={function(){move('lasr-mover', 'move-section-buds');}}>
            Select Player
        </h1>
        <PortalContainer>
          <Portal disabled>
            <BudImg portal opaque />
            <PortalTag>
              <strong className="buds">Space Buds</strong>
            </PortalTag>
          </Portal>
          <Portal>
            <AstronautImg portal opaque />
            <PortalTag>
              <strong className="astronauts">Lonely Astronauts</strong>
            </PortalTag>
          </Portal>
        </PortalContainer>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="index__page" id="lasr__index">
      <Container />
    </div>
  );
}
