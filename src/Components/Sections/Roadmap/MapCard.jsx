import React from 'react';
import Card from './Card';

export default function MapCard(props) {
  return (
    <Card active={props.active}
          bg={props.bg}
          color={props.color}
          area={props.area}
          empty={!props.children}>
      <article>
        {props.children}
      </article>
      <div className="move-nav__container">
        <span className="next arrow right" />
      </div>
    </Card>
  );
}
