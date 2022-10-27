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
            <PortalButton disabled>
              Staking Portal
            </PortalButton>
            <PortalTag>
              Portal is not available yet. Try again later.
            </PortalTag>
          </Portal>
          <Portal>
            <PortalButton mover="gate-mover"
                          goto="bank">
              Astro Gate
            </PortalButton>
            <PortalTag>
              Enter the Gate
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
