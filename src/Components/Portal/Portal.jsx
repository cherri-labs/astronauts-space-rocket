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
    const zoom = this.props.zoom;
    const goto = this.props.goto;
    const disabled = this.props.disabled;
    const anchor = this.props.anchor;
    const glitch = this.props.glitch;

    return (
      <div className={'portal-btn-wrap '
                    + (zoom ? 'zoom ' : '')
                    + (glitch ? 'glitch ' : '')
                    + (disabled ? 'disabled ' : '')}
           onMouseOver={function() {
             setGlitch('.portal-btn-wrap.disabled');
             if (glitch)
               setGlitch('.portal-btn-wrap.glitch', 200, 1, false, 6, 2000, false,);
           }}
           onClick={function() {
             /* if button not disabled */
             if (!disabled)
               /* move to section */
               menu.move(mover, goto);
           }}>
        <button className={'portal '
                         + (anchor ? 'anchor ' : '')
                         + (disabled ? 'disabled ' : '')}>
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
