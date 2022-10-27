import React from 'react';
import setGlitch from '../../glitchTransition';
import { menu } from '../Menu/SideMenu.jsx';

export function PortalTag(props) {
  return (
    <span className="portal">
      {props.children}
    </span>
  );
}

export class PortalButton extends React.Component {
  render() {
    const mover = this.props.mover;
    const goto = this.props.goto;
    const disabled = this.props.disabled;

    return (
      <div className={"portal-btn-wrap " + (disabled ? 'disabled' : '')}>
        <button className={"portal " + (disabled ? 'disabled' : '')}
                onMouseOver={function() {
                  setGlitch('.portal-btn-wrap.disabled:hover');
                }}
                onClick={function() {
                  /* if button not disabled */
                  if (!disabled)
                    /* move to section */
                    menu.move(mover, goto);
                }}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export function PortalContainer(props) {
  return (
    <div className="portal-container">
      {props.children}
    </div>
  );
}

export default function Portal(props) {
  return (
    <div className="portal-wrap">
      {props.children}
    </div>
  );
}
