import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import setGlitch from '../../glitchTransition';
import move from '../Move/move';

export function PortalTag(props) {
  return (
    <div className={"portal-tag "
                  + (props.center ? 'center ' : '')
                  + (props.disabled ? 'disabled ' : '')}
         style={{marginTop: props.top,
                 marginRight: props.right}}>
      <span className="portal">
        {props.children}
      </span>
    </div>
  );
}

export class PortalButton extends React.Component {
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
               move(mover + "-mover", "move-section-" + goto);
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
    <div className={"portal-container " + props.className}>
      {props.children}
    </div>
  );
}

export default class Portal extends React.Component {
  componentDidMount() {
    VanillaTilt.init(document.querySelectorAll('.portal-wrap'), {
      max: 5,
    });
  }

  render() {
    return (
      <div className={"portal-wrap " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
