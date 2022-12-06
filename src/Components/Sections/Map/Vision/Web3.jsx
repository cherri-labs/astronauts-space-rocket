import React from 'react';
import { MoveSection } from '../../../Move/Mover';
import MapCard from '../MapCard';

const mover = "cyber";

export default function Web3() {
  return (
    <MoveSection id="vision_web3">
      <MapCard mover={mover} center>
        <p>
          A new generation is going to state once and for
          all what identity is and <strong>how we can define it.</strong>
        </p>
      </MapCard>
      <MapCard mover={mover} center>
        <p>
          Technology moves fast and we've got to <strong>keep up the
          pace.</strong>
        </p>
      </MapCard>
      <MapCard mover={mover} center>
        <p>
          We will overwhelm the web3 reality with <strong>our own
          vision.</strong> A new approach on things that cuts right through
          the shit and gets to the core of it.
        </p>
      </MapCard>
      <MapCard mover={mover} center>
        <p>
          You're going to witness all that <strong>first hand.</strong>
        </p>
        <p>
          There's so much to be
          done. Let's <strong>not waste a minute.</strong>
        </p>
      </MapCard>
      <MapCard mover={mover} section="vision_index" center>
        <p>
          We've all been waiting long enough. Now it's time to
          move. <strong>And we move together.</strong>
        </p>
      </MapCard>
    </MoveSection>
  );
}
