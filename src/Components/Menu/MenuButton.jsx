import React from 'react';
import { menu } from './SideMenu';

class MenuButton extends React.Component {
  render() {
    const goto = this.props.goto;
    const mover = this.props.mover;
    const disabled = this.props.disabled;

    return (
      <>
        <button className={"sticky " + (this.props.active ? 'active' : '')}
                id={"move-button-" + goto + "-active"}
                onClick={function(){menu.toggle(goto);}}>
          {this.props.title ? this.props.title : this.props.children}
        </button>

        {(this.props.only) ? "" :
         /* show button in open menu if not 'only' */
         <button id={"move-button-" + goto}
                 className={disabled ? 'disabled' : ''}
                 onClick={function(){
                   /* if button not disabled */
                   if (!disabled)
                     /* move to section */
                     menu.move(mover, goto);
                 }}>
           {this.props.children}
         </button>
        }
      </>
    );
  }
}
export default MenuButton;
