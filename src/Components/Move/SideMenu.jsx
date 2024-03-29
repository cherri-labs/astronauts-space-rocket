import React from 'react';
import MenuButton from './MenuButton';
import SubMenu from './SubMenu';
import move from './move';
import fullscreen from '../../fullscreen';

const homeMoverId = "home";
const lasrMoverId = "lasr";
const gateMoverId = "gate";
const cyberMoverId = "cyber";

export let menu = [];
class SideMenu extends React.Component {
  componentDidMount() {
    /* menu container div */
    menu.div = document.getElementById("side-menu");

    /* toggle switches */
    menu.activate = function(menuId) {
      /* toggle light switch */
      if (menuId === "lights")
        document.getElementById("root").classList.toggle("lights-on");

      /* toggle fullscreen */
      if (menuId === "fullscreen") {
        /* toggle fullscreen */
        fullscreen();

        /* toggle fullscreen class on page */
        document.body.classList.toggle("widescreen");

        /* close menu */
        menu.hide();
      }

      /* toggle menu button */
      document.getElementById("menu-" + menuId).classList.toggle("active");
    };

    /* hide menu */
    menu.hide = function() {
      menu.div.classList.add('hidden');
    };

    /* toggle menu visibility */
    menu.toggle = function() {
      menu.div.classList.toggle('hidden');
    };

    /* move and close menu */
    menu.move = function(moverId, section, index = 0) {
      move(moverId + "-mover", "move-section-" + section, index);
      menu.hide();
    };

    /* activate section button */
    menu.activateBtn = function(subMenuId, moveSection) {
      /* our button */
      let btn; /* we don't get by id here to avoid sub-menu ambiguity */

      /* button sub menu */
      const subMenu = menu.div.querySelector("#sub-" + subMenuId);

      /* all buttons in the same sub-menu */
      const buttons = subMenu.getElementsByTagName('button');

      /* our button id */
      const btnId = 'move-button-' + moveSection + '-active';

      /* parse and reinitialize buttons */
      [...buttons].forEach(function(b) {
        /* if button id corresponds */
        if (b.id === btnId)
          /* set our button */
          btn = b;

        if (!b.classList.contains('disabled') &&
            !b.classList.contains('icon'))
          b.classList.remove('active');
      });

      /* if there's a button */
      if (btn)
        /* activate button */
        btn.classList.add('active');
    };

    /* listen for mouse click */
    window.addEventListener('click', function(e) {
      /* click outside map menu */
      if (!menu.div.contains(e.target) ||
          (e.target.tagName.toLowerCase() !== 'button' &&
           e.target.tagName.toLowerCase() !== 'span')) {
        /* hide div */
        menu.hide();
      }
    });
  }

  render() {
    return (
      <div id="side-menu" className="menu hidden">
        <div className="top-bar">
          <button className="icon north west"
                  onClick={function(){menu.hide();}}>
            ☰
          </button>
        </div>

        <SubMenu name="home">
          <MenuButton mover={homeMoverId} index active />
        </SubMenu>

        <SubMenu name="lasr">
          <MenuButton mover={lasrMoverId} index active />
        </SubMenu>

        <SubMenu name="gate">
          <MenuButton mover={gateMoverId} index active />
          <MenuButton goto="stake" mover={gateMoverId} glitch disabled>Stake</MenuButton>
          <MenuButton goto="bank" mover={gateMoverId}>Gate</MenuButton>
          <MenuButton goto="asol" mover={gateMoverId}>$ASOL</MenuButton>
        </SubMenu>

        <SubMenu name="cyber" hidden>
          <MenuButton goto="world" mover={cyberMoverId} active>Explore</MenuButton>
          <MenuButton goto="vision" mover={cyberMoverId}>Vision</MenuButton>
          <MenuButton goto="path" mover={cyberMoverId}>Goals</MenuButton>
        </SubMenu>
      </div>
    );
  }
}
export default SideMenu;
