import React from 'react';
import { MoveSection } from '../../Move/Mover';
import { MoveAnchor } from '../../Move/MoveButton';
import MapCard from './MapCard';

const mover = "cyber";

function Landing() {
  return (
    <MapCard mover={mover} title="Landing" bg="landing">
      <p>
        Landing phase is going to be minting for both initial
        collections.
        After each mint NFTs from the reserve are going
        to fuel giveaways to the community and holder airdrops.
      </p>
      <p>
        That's going to include the original NFTs from which all others were
        generated.
      </p>
      <p>
        Rewards will be accessible from the{" "}
        <MoveAnchor mover="gate" goto="bank">
          <strong>Astro Bank</strong>
        </MoveAnchor>
        {" "}right after mint.
      </p>
    </MapCard>
  );
}

function Stardust() {
  return (
    <MapCard mover={mover} title="Stardust" bg="stardust">
      <p>
        We are planning to launch our very token after both mints.
      </p>
      <p>
        <strong>Stardust</strong>.
      </p>
      <p>
        All of initial allocation will be airdropped to holders.
      </p>
      <p>
        <strong>$STRD</strong> tokens will be the standarm form of payment
        for services following the release.
      </p>
    </MapCard>
  );
}

function Terraforming() {
  return (
    <MapCard mover={mover} title="Terra / forming" bg="terraforming">
      <p>
        We work nonstop to produce more extensive
        documentation about the project. We plan to
        release extended docs during terraforming phase.
      </p>
      <p>
        Terraforming would begin right after mint and continue throughout
        the token launch.
      </p>
    </MapCard>
  );
}

function LonelySpace() {
  return (
    <MapCard mover={mover} title="Lonely Space" bg="lonely-space">
      <p>
        The <strong>Lonely Orbiting Space Hideout</strong> opens its doors.
      </p>
      <p>
        Here you can hang out, chat with other members,
        take a shot at one of our challenges or just buy dope stuff.
      </p>
      <p>
        No rules, so you do you.
        </p>
      <p>
        <b>Holders only //</b>
      </p>
    </MapCard>
  );
}

function Staking() {
  return (
    <MapCard mover={mover} title="Staking" bg="staking">
      <p>
        After mint implementation for
        the <strong>staking portal</strong> begins.
      </p>
      <p>
        <MoveAnchor mover="lasr" goto="index">
          <strong>LASR NFTs</strong>
        </MoveAnchor>
        {" "}and <strong>$STRD</strong> tokens in your wallet will be stakable
        in exchange for rewards.
      </p>
    </MapCard>
  );
}

function Expansion() {
  return (
    <MapCard mover={mover} title="Expansion" bg="expansion">
      <p>
        That's not all!
        The <strong>LASR</strong> universe is intricate and complex.
      </p>
      <p>
        You're going to discover it with us, as we do the same.
      </p>
      <p>
        We will eventually drop our newer collections to the world,
        as well as other products we are currently working on and
        things we still have to take on.
      </p>
      <p>
        At this time the <strong>LASR DAO</strong> is created.
        The <strong>LASR DAO</strong> will be regulated entirely by the
        community. It will be in charge of
        the <strong>Stardust</strong> token as well as other
        community decisions to be taken together.
      </p>
      <p>
        So you will be in charge of all this. Break a leg!
      </p>
    </MapCard>
  );
}

function QuestToFaraway() {
  return (
    <MapCard mover={mover} title="Quest To Faraway" bg="quest-to-faraway">
      <p>
        We've planned the route just ahead of us, but there's no finish line.
      </p>
      <p>
        <strong>LASR</strong> is meant to be owned entirely by the community, and
        possibilities are endless.
      </p>
      <p>
        We believe it's much cooler to let it grow wild and see
        what it can do by itself, what it can become. It will
        be fascinating to observe as it mutates and takes on new shapes and
        forms. All kinds of them.
      </p>
      <p>
        We wouldn't miss it for the world.
      </p>
    </MapCard>
  );
}

export default function Path() {
  return (
    <MoveSection id="path">
      <Landing />
      <Stardust />
      <Terraforming />
      <LonelySpace />
      <Staking />
      <Expansion />
      <QuestToFaraway />
    </MoveSection>
  );
}
