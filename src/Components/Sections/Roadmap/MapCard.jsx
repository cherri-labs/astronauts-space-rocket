import React from 'react';
import Card from './Card';
import { moveBack } from '../../Move/move';

function onClick() {
  moveBack('cyber-mover', 2);
}

export default function MapCard(props) {
  return (
    <Card active={props.active}
          bg={props.bg}
          area={props.area}
          empty={!props.children}>
      <article>
        {props.children}
        <span className="back" onClick={onClick} />
        <span className="next" />
      </article>
    </Card>
  );
}
