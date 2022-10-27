import React from 'react';

export default function SubmitButton(props) {
  const onClick = props.onClick;
  const disabled = props.disabled;

  return (
    <button  className="submit"
             onClick={onClick}
             disabled={disabled}>
      <span>{props.children}</span>
    </button>
  );
}
