import React from 'react';
import Card from './Card';

export default function MapCard(props) {
  return (
    <Card active={props.active}
          bg={props.bg}
          mover={props.mover}
          section={props.section}
          fragment={props.fragment}
          by={props.by}
          to={props.to}
          color={props.color}
          area={props.area}
          position={props.position}
          nav={props.nav}
          bar={props.bar}
          forward={!(props.nav && props.continue !== 'true') &&
                   props.continue !== 'false'}
          next={props.next}
          esc={props.esc}
          empty={!props.children || props.nav}>
      <article>
        {props.children}
      </article>
    </Card>
  );
}
