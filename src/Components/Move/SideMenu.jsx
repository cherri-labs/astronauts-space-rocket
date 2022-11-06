import React from 'react';
import MenuButton from './MenuButton';
import SubMenu from './SubMenu';
import move from './move';
import fullscreen from '../../fullscreen';

const lasrMoverId = "lasr";
const gateMoverId = "gate";
const cyberMoverId = "cyberverse";
const mapMoverId = "roadmap";

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
    menu.move = function(moverId, section) {
      move(moverId + "-mover", "move-section-" + section);
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
          <button id="menu-fullscreen" className="icon north"
                  onClick={function(){menu.activate("fullscreen");}}>
            <i className="screen" />
          </button>
          <button id="menu-lights" className="icon north east lightbulb"
                  onClick={function(){menu.activate("lights");}}>
            <span>💡</span>
          </button>
        </div>

        <SubMenu name="lasr">
          <MenuButton mover={lasrMoverId} index active />
        </SubMenu>

        <SubMenu name="gate">
          <MenuButton mover={gateMoverId} index active />
          <MenuButton goto="stake" mover={gateMoverId} disabled>Stake</MenuButton>
          <MenuButton goto="bank" mover={gateMoverId}>Gate</MenuButton>
        </SubMenu>

        <SubMenu name="cyber">
          <MenuButton mover={cyberMoverId} index show active>Cyberverse</MenuButton>
        </SubMenu>

        <SubMenu name="roadmap">
          <MenuButton goto="world" mover={mapMoverId} active>World</MenuButton>
          <MenuButton goto="vision" mover={mapMoverId}>Vision & Goals</MenuButton>
          <MenuButton goto="path" mover={mapMoverId}>Path</MenuButton>
        </SubMenu>
      </div>
    );
  }
}
export default SideMenu;
