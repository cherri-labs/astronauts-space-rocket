import React from 'react';
import fragNav from '../../../Move/fragNav';

export default function ExploreTitle(props) {
  return (
    <>
      <i className="arrow left" />
      <a className="strong"
         onClick={function() {fragNav('explore', 'nav');}}>
        {props.children}
      </a>
      <i className="arrow right" />
    </>
  );
}
