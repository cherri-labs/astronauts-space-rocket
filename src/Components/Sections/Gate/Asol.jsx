import React from 'react';
import { Container, Content, Text } from '../Section';

const Hex = () => {
  return (
    <div className="prism hex" />
  );
};

const Txt = () => {
  return (
    <Text card>
      <h3>
        Astro SOL
      </h3>
      <p>
        <strong>Astro SOL</strong> {"("}<strong><span className="prism hex" />ASOL</strong>{")"} is
        an <strong>SPL token</strong> designed to provide a decentralized framework for anonymous
        identification through a no-nonsense lightweight model stripped of all unnecessary abstraction,
        redundancy and complexity—all boiled down into a pithy gem.
      </p>
      <p>
        The easier it is to fully grasp something the wider the audience it can reach. That's
        the core idea behind this project rebranding.
        You can find more detailed information about <strong>$ASOL</strong> and <strong>Astro Gate</strong> on
        {" "}<a target="_blank" rel="noreferrer"
                href="https://github.com/cherri-labs/astrobank#astro-gate">
        our Github</a>.
      </p>
    </Text>
  );
};

function Page() {
  return (
    <Container>
      <Content>
        <Hex />
        <Txt />
      </Content>
    </Container>
  );
}

export default function Asol() {
  return (
    <div id="asol">
      <Page />
    </div>
  );
}
