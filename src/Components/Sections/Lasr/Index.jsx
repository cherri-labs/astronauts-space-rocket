import React from 'react';
import Portal, {
  PortalContainer,
  PortalTag,
} from '../../Portal/Portal';
import { Container, Content } from '../Section';
import { AstronautImg } from './Astronauts';
import { BudImg } from './Buds';

function Page() {
  return (
    <Container>
      <Content>
        <div className="title-container">
          <h1>
            Select
          </h1>
          <h1>
            Player
          </h1>
        </div>
        <PortalContainer
          className="focus"
          onClick={function(e) {
            if (!e.target.classList.contains('disabled'))
              document.getElementById("lasr").classList.remove('fullscreen');
          }}>
          <Portal disabled>
            <BudImg portal opaque />
            <PortalTag center>
              <strong className="buds">
                Space Buds
              </strong>
            </PortalTag>
          </Portal>
          <Portal>
            <AstronautImg portal opaque />
            <PortalTag center>
              <strong className="astronauts">
                Lonely Astronauts
              </strong>
            </PortalTag>
          </Portal>
        </PortalContainer>
      </Content>
    </Container>
  );
}

export default function Index() {
  return (
    <Page />
  );
}
