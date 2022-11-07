import React from 'react';
import Card, { CardTitle } from './Card';
import { MoveSection, MoveNav } from '../../Move/Mover';

export default function Vision() {
  return (
    <MoveSection id="vision">
      <div className="bg-container">
        <div className="vision bg" />
      </div>
      <Card>
        <CardTitle>Changes</CardTitle>
        <article>
          <p>
            Change doesn't happen overnight,
            but <b>one tiny step at a time.</b>
          </p>
          <MoveNav mover="roadmap" />
        </article>
      </Card>
      <Card>
        <CardTitle>Minimalism</CardTitle>
        <article>
          <p>
            Whenever we provide
            you with information, software, interfaces, <b>we try to keep
            it as simple and stupid as possible—so the important stuff
            is always in clear sight.</b>
          </p>
          <MoveNav mover="roadmap" />
        </article>
      </Card>
    </MoveSection>
  );
}
