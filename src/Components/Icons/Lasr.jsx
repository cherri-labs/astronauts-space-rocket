import React from 'react';
import nav from '../../nav';

export default function Lasr(props) {
  const lasrClass = "arrow logo " + (props.type ? props.type : "");

  return (
    <div className="lasr">
      <a onClick={function(){nav('home');}}>
        <i className={lasrClass} />
      </a>
    </div>
  );
}
