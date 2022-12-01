import React from 'react';
import Card from './Card';

export default function MapCard(props) {
  return (
    <Card active={props.active}
          bg={props.bg}
          color={props.color}
          area={props.area}
          center={props.center}
          nav={props.nav}
          bar={props.bar}
          forward={!(props.nav && props.continue !== 'true') &&
                   props.continue !== 'false'}
          next={props.next}
          empty={!props.children || props.nav}>
      <article>
        {props.children}
      </article>
      <div className={"move-nav__container " + (props.nav ? 'hidden ' : '')}>
        <span className="next arrow right" />
      </div>
    </Card>
  );
}
