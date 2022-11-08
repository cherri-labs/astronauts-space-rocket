import React from 'react';
import Portal, {
  PortalContainer,
  PortalTag,
} from '../../Portal/Portal';
import { Container, Content } from '../Section';
import { AstronautImg } from './Astronauts';
import { BudImg } from './Buds';
import GlitchSpan from '../../GlitchSpan';
import move from '../../Move/move';
import lang from '../../lang';

function Page() {
  return (
    <Container>
      <Content>
        <h1 className="neon"
            onClick={function(){move('lasr-mover', 'move-section-buds');}}>
          <GlitchSpan id="select-player__glitch"
                      steps="2"
                      duration="0"
                      delay="100"
                      write={lang["select player"]}>
            Select Player
          </GlitchSpan>
        </h1>
        <PortalContainer className="focus">
          <Portal disabled>
            <GlitchSpan id="select-player__glitch"
                        steps="2"
                        duration="0"
                        delay="100"
                        text="Select Player"
                        write={lang["space buds"]}
                        div>
              <BudImg portal opaque />
              <PortalTag>
                <strong className="buds">
                  <GlitchSpan id="select-player__glitch"
                              steps="2"
                              duration="0"
                              delay="100"
                              write={"Space Buds"}
                              div>
                    <GlitchSpan id="player-bud__glitch"
                                steps="2"
                                duration="0"
                                delay="100"
                                write={lang["space buds"]}>
                      Space Buds
                    </GlitchSpan>
                  </GlitchSpan>
                </strong>
              </PortalTag>
            </GlitchSpan>
          </Portal>
          <Portal>
            <GlitchSpan id="select-player__glitch"
                        steps="2"
                        duration="0"
                        delay="100"
                        text="Select Player"
                        write={lang["lonely astronauts"]}
                        div>
              <AstronautImg portal opaque />
              <PortalTag>
                <strong className="astronauts">
                  <GlitchSpan id="select-player__glitch"
                              steps="2"
                              duration="0"
                              delay="100"
                              write={"Lonely Astronauts"}
                              div>
                    <GlitchSpan id="player-astronaut__glitch"
                                steps="2"
                                duration="0"
                                delay="100"
                                write={lang["lonely astronauts"]}>
                      Lonely Astronauts
                    </GlitchSpan>
                  </GlitchSpan>
                </strong>
              </PortalTag>
            </GlitchSpan>
          </Portal>
        </PortalContainer>
      </Content>
    </Container>
  );
}

export default function Index() {
  return (
    <div className="index__page" id="lasr__index">
      <Page />
    </div>
  );
}
