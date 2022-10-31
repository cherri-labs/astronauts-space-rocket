import React from 'react';
import VanillaTilt from 'vanilla-tilt';
import nav from '../Move/nav';

class Lasr extends React.Component {
  componentDidMount() {
    if (this.props.tilt)
      VanillaTilt.init(document.querySelectorAll('.lasr.tilt a'), {
        reverse: true,
      });
  }

  render() {
    const lasrClass = 'arrow logo ' +
                       (this.props.type ? this.props.type : '');

    return (
      <div className={'lasr ' + (this.props.tilt ? 'tilt ' : '')}>
        <a onClick={function(){nav('home');}}>
          <i className={lasrClass} />
        </a>
      </div>
    );
      }
}
export default Lasr;
