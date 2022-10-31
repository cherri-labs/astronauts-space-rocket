import React from 'react';
import Card, { CardTitle } from './Card';
import { MoveNav } from '../../Move/Mover';

export default function Path() {
  return (
    <div id="move-section-path"
         className="move-section">
      <div className="bg-container">
        <div className="path bg" />
      </div>
      <Card>
        <CardTitle>Landing</CardTitle>
        <article>
          <p>
            As we approach <b>landing phase</b> we are going to
            release <strong>Space Buds</strong> to the world.
            After <i>whitelist phase</i> and <i>public mint</i>, <b>32</b>{" "}
            <strong>Space Commanders</strong> will be airdropped to holders
            and giveaway winners, together with the remaining portion
            of <strong>Space Buds</strong> NFTs.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
      <Card>
        <CardTitle>Landing</CardTitle>
        <article>
          <p>
            All funds from the mint will are locked immediately into
            the <strong>Astro Bank</strong> where users are
            able to claim their rewards right away.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
      <Card>
        <CardTitle>Terraforming</CardTitle>
        <article>
          <p>
            We're working everyday to extend the current
            documentation about the project. We plan to
            release that during <b>Terraforming</b>.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
      <Card>
        <CardTitle>Terraforming</CardTitle>
        <article>
          <p>
            We will also be opening a <strong>Space Club</strong> for
            owners, where they can hop in for a chat, drink or
            just to buy dope stuff.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
      <Card>
        <CardTitle>Terraforming</CardTitle>
        <article>
          <p>
            After <strong>Lonely Astronauts</strong> mint we implement
            the staking portal and <strong>$STRD</strong> tokens are
            airdropped to owners only.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
      <Card>
        <CardTitle>Expansion</CardTitle>
        <article>
          <p>
            We release <strong>Mechas</strong> and <strong>Rebels</strong> to
            the world.
          </p>
          <p>
            The <strong>LASR</strong> DAO is created.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
      <Card>
        <CardTitle>Quest to Faraway</CardTitle>
        <article>
          <p>
            All owners can participate in the <strong>Grand Race for
                                                Space</strong> and take their chance to win the big
            money prize.
          </p>
          <p>
            The <strong>LASR</strong> metaverse finally arrives.
          </p>
          <MoveNav mover="roadmap-mover" />
        </article>
      </Card>
    </div>
  );
}
