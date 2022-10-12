import React from 'react';
import move from '../move';

const moverId = "map-mover";

export let menu = [];

class MapMenu extends React.Component {
  componentDidMount() {
    /* menu container div */
    menu.div = document.getElementById("map-menu");

    /* toggle lights */
    menu.lights = function() {
      document.getElementById("roadmap").classList.toggle("lights-out");
      document.getElementById("menu-lights").classList.toggle("out");
    };

    /* hide menu */
    menu.hide = function() {
      menu.div.classList.add('hidden');
    };

    /* toggle menu visibility */
    menu.toggle = function() {
      menu.div.classList.toggle('hidden');
    };

    /* activate map section button */
    menu.activateBtn = function(mapSection) {
      const btn = document.getElementById('map-button-' + mapSection + '-active');

      /* button */
      const buttons = document.getElementById('map-menu')
            .getElementsByTagName('button');

      /* reinitialize buttons */
      [...buttons].forEach(function(b) {
        if (!b.classList.contains('disabled'))
          b.classList.remove('active');
      });

      /* activate button */
      btn.classList.add('active');
    };

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
          <button id="menu-lights" className="icon north east lightbulb"
                  onClick={function(){menu.lights();}}>
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
                onClick={function(){move(moverId, "map-section-world");}}>
          World
        </button>
        <button id="map-button-vision"
                onClick={function(){move(moverId, "map-section-vision");}}>
          Vision & Goals
        </button>
        <button id="map-button-path"
                onClick={function(){move(moverId, "map-section-path");}}>
          Path
        </button>
      </div>
    );
  }
}

export default MapMenu;
