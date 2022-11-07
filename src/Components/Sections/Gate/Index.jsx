import React from 'react';
import Portal, {
  PortalContainer,
  PortalButton,
  PortalTag,
} from '../../Portal/Portal';
import { Container, Content } from '../Section';

function Page() {
  return (
    <Container>
      <Content>
        <PortalContainer className="focus">
          <Portal disabled>
            <PortalButton disabled>
              Staking Portal
            </PortalButton>
            <PortalTag>
              Portal is not available yet. Try again later.
            </PortalTag>
          </Portal>
          <Portal>
            <PortalButton mover="gate"
                          goto="bank">
              Astro Gate
            </PortalButton>
            <PortalTag>
              Enter the Gate
            </PortalTag>
          </Portal>
        </PortalContainer>
      </Content>
    </Container>
  );
}

export default function Index() {
  return (
    <div className="index__page" id="gate__index">
      <Page />
    </div>
  );
}
