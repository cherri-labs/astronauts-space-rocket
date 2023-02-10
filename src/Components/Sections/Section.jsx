import React from 'react';

export function Text(props) {
  return (
    <div className={'text '
                  + (props.card ? 'card ' : '')}>
      <article>
        {props.children}
      </article>
    </div>
  );
}

export function Content(props) {
  return (
    <div id="content">
      {props.children}
    </div>
  );
}

export function Container(props) {
  return (
    <div id="container">
      {props.children}
    </div>
  );
}
