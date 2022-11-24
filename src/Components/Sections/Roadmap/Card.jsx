import React from 'react';
import { moveNext } from '../../Move/move';

let activeBg;

function close() {
  const cards = document.getElementById("cyber")
                        .getElementsByClassName("card-wrap active");

  [...cards].forEach(function (c) {
    c.classList.toggle("closed");
  });
}

export function CardTitle(props) {
  return <h3 className="clickable" onClick={function(){close();}}>{props.children}</h3>;
}

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
  }

  componentDidMount() {
    /* toggle opening transition */
    this.myRef.current.classList.remove("closed");
  }

  onClick() {
    moveNext('cyber-mover');
  }

  render() {
    if (this.props.bg)
      activeBg = this.props.bg;

    return (
      <div ref={this.myRef} className={"card-wrap "
                                       + (this.props.active ? "active " : "")
                                       + (this.props.closed ? "" : "closed")}
           onClick={this.onClick}>
        <div className={activeBg ? "bg-container" : ""}>
          <div className={activeBg ? activeBg + " bg" : ""} />
        </div>
        <div className={"card "
                      + (this.props.locked ? "locked " : "")}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Card;
