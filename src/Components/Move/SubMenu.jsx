import React from 'react';

class SubMenu extends React.Component {
  render() {
    return (
      <div id={'sub-' + this.props.name}
           className={'sub-menu '
                    + (this.props.hidden ? 'hidden ' : '')}>
        {this.props.children}
      </div>
    );
  }
}
export default SubMenu;
