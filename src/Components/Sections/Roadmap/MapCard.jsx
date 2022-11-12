import React from 'react';
import Card, { CardTitle } from './Card';
import { MoveNav } from '../../Move/Mover';

export default function MapCard(props) {
  return (
    <Card active={props.active} bg={props.bg}>
      <CardTitle>{props.title}</CardTitle>
      <article>
        {props.children}
        <MoveNav mover={props.mover} />
      </article>
    </Card>
  );
}
