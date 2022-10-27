import React from 'react';
import Portal, {
  PortalContainer,
  PortalButton,
  PortalTag,
} from '../../Portal/Portal';

function Container() {
  return (
    <div id="container">
      <div id="content">
        <PortalContainer>
          <Portal disabled>
            <PortalButton mover="lasr-mover"
                          goto="buds">
              Space Buds
            </PortalButton>
            <PortalTag>
              Ready Player 2
            </PortalTag>
          </Portal>
          <Portal>
            <PortalButton mover="lasr-mover"
                          goto="astronauts">
              Lonely Astronauts
            </PortalButton>
            <PortalTag>
              Ready Player 1
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
