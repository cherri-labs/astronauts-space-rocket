import React from 'react';

class SubMenu extends React.Component {
  render() {
    return (
      <div className="sub-menu" id={"sub-" + this.props.name}>
      {this.props.children}
      </div>
    );
  }
}
export default SubMenu;
