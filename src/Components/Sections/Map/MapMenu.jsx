import React from 'react';
import { moveWithTrans } from '../move';

const moverId = "map-mover";

export let menu = [];

class MapMenu extends React.Component {
  componentDidMount() {
    /* menu container div */
    menu.div = document.getElementById("map-menu");

    /* toggle switches */
    menu.activate = function(menuId) {
      /* toggle light switch */
      if (menuId === "lights")
        document.getElementById("roadmap").classList.toggle("lights-out");

      /* toggle screensaver */
      if (menuId === "screensaver") {
        /* toggle fullscreen */
        const domHtml = document.documentElement;
        fullscreen(domHtml);

        /* toggle button */
        document.getElementById("roadmap").classList.toggle("screensaver");

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
    menu.move = function(section) {
      moveWithTrans(moverId, "map-section-" + section);
      menu.hide();
    };

    /* activate map section button */
    menu.activateBtn = function(mapSection) {
      const btn = document.getElementById('map-button-' + mapSection + '-active');

      /* button */
      const buttons = document.getElementById('map-menu')
            .getElementsByTagName('button');

      /* reinitialize buttons */
      [...buttons].forEach(function(b) {
        if (!b.classList.contains('disabled') &&
            !b.classList.contains('icon'))
          b.classList.remove('active');
      });

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
      <div id="map-menu" className="menu hidden">
        <div className="top-bar">
          <button className="icon north west"
                  onClick={function(){menu.hide();}}>
            ☰
          </button>
          <button id="menu-screensaver" className="icon north"
                  onClick={function(){menu.activate("screensaver");}}>
            <i className="screen" />
          </button>
          <button id="menu-lights" className="icon north east lightbulb active"
                  onClick={function(){menu.activate("lights");}}>
            <span>💡</span>
          </button>
        </div>
        <button className="sticky active"
                id="map-button-world-active"
                onClick={function(){menu.toggle("world");}}>
          World
        </button>
        <button className="sticky"
                id="map-button-vision-active"
                onClick={function(){menu.toggle("vision");}}>
          Vision & Goals
        </button>
        <button className="sticky"
                id="map-button-path-active"
                onClick={function(){menu.toggle("path");}}>
          Path
        </button>
        <button id="map-button-world"
                onClick={function(){menu.move("world");}}>
          World
        </button>
        <button id="map-button-vision"
                onClick={function(){menu.move("vision");}}>
          Vision & Goals
        </button>
        <button id="map-button-path"
                onClick={function(){menu.move("path");}}>
          Path
        </button>
      </div>
    );
  }
}

export default MapMenu;
