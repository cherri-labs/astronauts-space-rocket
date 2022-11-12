import React from 'react';
import { MoveSection } from '../../Move/Mover';
import { MoveAnchor } from '../../Move/MoveButton';
import MapCard from './MapCard';

const mover = "roadmap";

function Landing() {
  return (
    <MapCard mover={mover} title="Landing">
      <p>
        Landing phase is going to be minting for both initial
        collections.
        After each mint NFTs from the reserve are going
        to fuel giveaways to the community and holder airdrops.
      </p>
      <p>
        That's going to include the original NFTs from which all others were
        generated. The <i>Commanders</i>.
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
    <MapCard mover={mover} title="Stardust">
      <p>
        We are planning to launch our very own token after both collections
        are minted.
      </p>
      <p>
        <strong>Stardust</strong>.
      </p>
      <p>
        It will be initially airdropped to holders only.
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
    <MapCard mover={mover} title="Terra-forming">
      <p>
        We're working everyday to extend the current
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

function SpaceClub() {
  return (
    <MapCard mover={mover} title="Space Club">
      <p>
        The <strong>Space Club</strong> will be opening doors to
        holders.
      </p>
      <p>
        In here they can hang out with others from the gang,
        take a shot at one of our challenges or just to buy dope stuff.
      </p>
      <p>
        <b>No rules.</b> Community comes first, so you do you.
      </p>
    </MapCard>
  );
}

function Staking() {
  return (
    <MapCard mover={mover} title="Staking">
      <p>
        After mint we will begin implementation for
        the <strong>staking portal</strong>.
      </p>
      <p>
        <MoveAnchor mover="lasr" goto="index">
          <strong>LASR NFTs</strong>
        </MoveAnchor>
        {" "}as well as <strong>$STRD</strong> tokens will be stakable
        in exchange for daily rewards.
      </p>
    </MapCard>
  );
}

function Expansion() {
  return (
    <MapCard mover={mover} title="Expansion">
      <p>
        We're not stopping there.
        The <strong>LASR</strong> universe is intricate and complex.
      </p>
      <p>
        You're going to discover it all with us, as we do the same.
      </p>
      <p>
        We will eventually release <strong>Mecha Angels</strong> and{" "}
        <strong>Cyber Rebels</strong> to the world.
      </p>
      <p>
        At this time the <strong>LASR DAO</strong> is created.
        The <strong>LASR DAO</strong> will be regulated entirely by the
        community. It will be in charge of
        the <strong>Stardust</strong> token as well as other important
        community decisions to be taken together.
      </p>
    </MapCard>
  );
}

function QuestToFaraway() {
  return (
    <MapCard mover={mover} title="Quest To Faraway">
      <p>
        Only you, <b>the community</b>, can decide how far we go.
      </p>
      <p>
        We've planned the route ahead of us, but there's no finish line.
      </p>
      <p>
        <strong>LASR</strong> is entirely yours, and possibilities
        are endless.
      </p>
      <p>
        We believe it's much cooler to leave it by itself and see
        how far it can travel, what it can become. It will
        be fascinating to observe as it mutates and takes on new shapes and
        forms of all kinds.
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
      <div className="bg-container">
        <div className="path bg" />
      </div>
      <Landing />
      <Stardust />
      <Terraforming />
      <SpaceClub />
      <Staking />
      <Expansion />
      <QuestToFaraway />
    </MoveSection>
  );
}
