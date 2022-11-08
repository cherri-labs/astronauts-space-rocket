import React from 'react';

export function Text(props) {
  return (
    <div className={"text focus space "
                  + (props.card ? "card " : "")}>
      <article className="focus space">
        {props.children}
      </article>
    </div>
  );
}

export function Content(props) {
  return (
    <div id="content"
         className={(props.focus ? "focus " : "")}>
      {props.children}
    </div>
  );
}

export function Container(props) {
  return (
    <div id="container"
         className={(props.focus ? "focus " : "")}>
      {props.children}
    </div>
  );
}
