import React from 'react';
import { MoveSection } from '../../Move/Mover';
import MapCard from './MapCard';

const mover = "roadmap";

function Creators() {
  return (
    <MapCard mover={mover} title="Creators" bg="creators">
      <p>
        We are creators, not followers.
      </p>
      <p>
        When we build something, we do it our own way. And it's
        never seen before, always new.
      </p>
      <p>
        We're making something that lasts here.
      </p>
      <p>
        Our goal is to create real change that truly has an impact on this
        world and that is going to stick with you through the test of time.
      </p>
      <p>
        Something that you want to hold on to till the end.
      </p>
    </MapCard>
  );
}

function Believe() {
  return (
    <MapCard mover={mover} title="Believe" bg="believe">
      <p>
        In this evolving digital realm, new and varied worlds
        spawn on everyday basis.
      </p>
      <p>
        With so many faces coming and going
        it's hard to keep a steady eye on things.
      </p>
      <p>
        We're building the content that's going to be part of the
        future. That's a privilege we won't throw away.
      </p>
      <p>
        Because
        {" "}<b>we all need something to believe in</b>.
      </p>
    </MapCard>
  );
}

function Ahead() {
  return (
    <MapCard mover={mover} title="Ahead" bg="ahead">
      <p>
        Our world used to be <b>one of a kind</b>. A distinctive mark
        in an otherwise unholy chaos of wishful thinking and
        abstract reality.
      </p>
      <p>
        Now we need to adapt or die.
      </p>
      <p>
        We abandon pieces of what's old in favor of
        progress and advancement.
      </p>
      <p>
      We keep looking ahead. And keep moving lest we stay behind.
      </p>
    </MapCard>
  );
}

function Dreams() {
  return (
    <MapCard mover={mover} title="Dreams" bg="dreams">
      <p>
        The line that separates us from our dreams becomes
        {" "}<b>thinner and thinner</b>.
      </p>
      <p>
        We're walking on that thin line. We make things possible
        for the first time.
      </p>
      <p>
        We don't wait on others to clear the way. We pave our own path. We
        stay relentless and true to our goals. And we're going to grow strong
        with you with every turning point.
      </p>
      <p>
        Our vision leads the way before us.
      </p>
      <p>
        Let's be <b>bold together.</b>
      </p>
    </MapCard>
  );
}

function DopeShit() {
  return (
    <MapCard mover={mover} title="Dope Shit" bg="dope-shit">
      <p>
        We build with design in mind, but community too.
        We try to keep things as simple and stupid as possible—so
        the important stuff is always in clear sight.
      </p>
      <p>
        We don't plan on sacrificing on features and functionality
        though. We keep ourselves always ahead of times and
        promise to deliver you with dope shit only. <b>Always.</b>
      </p>
    </MapCard>
  );
}

function OurWay() {
  return (
    <MapCard mover={mover} title="Our Way" bg="our-way">
      <p>
        Change doesn't happen overnight,
        but <b>one tiny step at a time.</b>
      </p>
      <p>
        We don't follow leads or walk in footsteps. We put our heart
        and soul into our work, and we believe in what we're creating.
      </p>
      <p>
        If you want to believe too, you have to know that great things
        take time to happen. But rest assured we won't let you down.
      </p>
      <p>
        Our best days are all ahead of us.
      </p>
    </MapCard>
  );
}

function Cyberworld() {
  return (
    <MapCard mover={mover} title="Cyberworld" bg="cyberworld">
      <p>
        If it glitches, good. That means it's healthy. It's organic.
        It's experimental.
      </p>
      <p>
        It's not things already seen over and over again. It ain't got
        time for detail. It's not stagnating in perfection, because
        it's already further away into the future.
      </p>
      <p>
        What you see here is real. There's no hiding from the truth, no
        secrets, no bells no whistles. We put all the power into your
        hands. It's up to you what to do with it.
      </p>
    </MapCard>
  );
}

function Identity() {
  return (
    <MapCard mover={mover} title="Identity" bg="identity">
      <p>
        A new generation is going to state once and for
        all what identity is and how we can define it.
      </p>
      <p>
        And as messy as
        that is, we will try our best to get the road down in a clear
        and linear path for you to walk on.
      </p>
    </MapCard>
  );
}

function Web3() {
  return (
    <MapCard mover={mover} title="Web3" bg="web3">
      <p>
        Technology moves fast. We've got to keep up the pace.
        We're going to overwhelm the web3 space with the way we see
        right through and implement a new and different approach
        on things.
      </p>
      <p>
        As part of our community you're going to witness all
        that in action. There's so much to be done, and we
        won't waste a minute before we take on an entirely
        different challenge. So you can see the advancements in
        real time.
      </p>
      <p>
        We don't like to keep you waiting. We've all been waiting
        for too long. Now it's time to go. And we move together.
      </p>
    </MapCard>
  );
}

export default function Vision() {
  return (
    <MoveSection id="vision">
      <Creators />
      <Believe />
      <Ahead />
      <Dreams />
      <DopeShit />
      <OurWay />
      <Cyberworld />
      <Identity />
      <Web3 />
    </MoveSection>
  );
}
