import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import setGlitch from '../../glitchTransition';
import { menu } from '../Move/SideMenu.jsx';

export function PortalTag(props) {
  return (
    <span className="portal">
      {props.children}
    </span>
  );
}

export class PortalButton extends React.Component {
  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll('.portal-wrap'), {
      max: 25,
    });
  }

  render() {
    const mover = this.props.mover;
    const goto = this.props.goto;
    const disabled = this.props.disabled;
    const anchor = this.props.anchor;

    return (
      <div className={'portal-btn-wrap ' + (disabled ? 'disabled' : '')}>
        <button className={'portal '
                         + (anchor ? 'anchor ' : '')
                         + (disabled ? 'disabled ' : '')}
                onMouseOver={function() {
                  setGlitch('.portal-btn-wrap.disabled');
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
