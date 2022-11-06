import React from 'react';
import MoveButton from './MoveButton';
import { menu } from './SideMenu';

export function MenuQuickLaunch(props) {
  return (
    <>
      <div className="quicklaunch sticky active"
           id={"move-button-"
             + (props.id ? props.id : 'quicklaunch')
             + "-active"}>
        {props.children}
      </div>
    </>
  );
}

class MenuButton extends React.Component {
  render() {
    const mover = this.props.mover;
    const goto = this.props.goto || 'index';
    const disabled = this.props.disabled;
    const quicklaunch = this.props.quicklaunch;

    return (
      <>
        <button className={"sticky "
                         + (this.props.active ? 'active ' : '')
                         + (this.props.show ? 'show ' : '')
                         + (this.props.index ? 'index ' : '')}
                id={"move-button-" + goto + "-active"}
                onClick={function(){
                  (quicklaunch ?
                   menu.move(mover, goto) :
                   menu.toggle(goto));
                }}>
          {this.props.title ? this.props.title : this.props.children}
        </button>

        {(this.props.only) ? "" :
         /* show button in open menu if not 'only' */
         <MoveButton id={"move-button-" + goto}
                     className={(disabled ? 'disabled ' : '')
                              + (this.props.index ? 'index ' : '')}
                     mover={mover}
                     goto={goto}
                     disabled={disabled}
                     menu>
           {this.props.children}
         </MoveButton>
        }
      </>
    );
  }
}
export default MenuButton;
