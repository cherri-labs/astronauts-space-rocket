import React from 'react';
import move, { moveNext } from '../../Move/move';

let activeBg;

function close() {
  const cards = document.getElementById('cyber')
                        .getElementsByClassName('card-wrap active');

  [...cards].forEach(function (c) {
    c.classList.toggle('closed');
  });
}

export function CardTitle(props) {
  return <h3 className='clickable' onClick={function(){close();}}>{props.children}</h3>;
}

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    /* toggle opening transition */
    this.myRef.current.classList.remove('closed');
  }

  render() {
    const mover = this.props.mover;
    const section = this.props.section;

    if (this.props.bg)
      activeBg = this.props.bg;
    const area = this.props.area;

    const forward = this.props.forward;

    function onClick(e) {
      if (forward) {
        const tag = e.target.tagName.toLowerCase();
        if (tag !== 'button' && tag !== 'a') {
          if (section)
            move(mover + '-mover', 'move-section-' + section);
          else
            moveNext(mover + '-mover');
        }
      }
    }

    return (
      <div ref={this.myRef} className={'card-wrap '
                                     + (this.props.active ? 'active ' : '')
                                     + (this.props.center ? 'center ' : '')
                                     + (this.props.nav ? 'nav ' : '')
                                     + (this.props.bar ? 'bar ' : '')
                                     + (this.props.forward ? 'forward ' : '')
                                     + (this.props.next ? 'next ' : '')
                                     + (this.props.esc ? 'esc ' : '')
                                     + (this.props.closed ? '' : 'closed ')}
           onClick={function(e) {onClick(e)}}>
        <div className={activeBg ? 'bg-container' : ''}>
          <div className={(activeBg ?
                           activeBg + ' bg '
                           + (area ? 'area ' + area : '')
                         : '')} />
        </div>
        <div className="card-container">
          <div className={'card '
                        + (this.props.color ? 'color__' + this.props.color : '')
                        + (this.props.locked ? ' locked ' : '')
                        + (this.props.nav ? ' nav ' : '')
                        + (this.props.empty ? ' empty ' : '')}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
