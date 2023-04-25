import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import navMove from '../Move/navMove';

class Lasr extends React.Component {
  componentDidMount() {
    if (this.props.tilt)
      VanillaTilt.init(document.querySelectorAll('.lasr.tilt a'), {
        reverse: true,
      });
  }

  render() {
    const href = this.props.nav;
    const lasrClass = 'arrow logo ' +
                       (this.props.type ? this.props.type : '');

    return (
      <div className={'lasr ' + (this.props.tilt ? 'tilt ' : '')}>
        <a onClick={function() {
          if (href)
            navMove(href);
        }}>
          <i className={lasrClass} />
        </a>
      </div>
    );
      }
}
export default Lasr;
