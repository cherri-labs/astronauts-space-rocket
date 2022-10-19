import React from 'react';

function close() {
  const cards = document.getElementById("roadmap")
                        .getElementsByClassName("card-wrap active");

  [...cards].forEach(function (c) {
    c.classList.toggle("closed");
  });
}

export function CardTitle(props) {
  return <h3 className="click" onClick={function(){close();}}>{props.children}</h3>;
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

  render() {
    return (
      <div ref = {this.myRef} className={"card-wrap " +
             (this.props.active ? "active " : "") +
                 (this.props.closed ? "" : "closed")}>
        <div className={"card " +
                 (this.props.locked ? "locked " : "")}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Card;
