import React from 'react';

export var menu = [];
menu.anchors = ['world', 'vision', 'path'];

class MapMenu extends React.Component {
  componentDidMount() {
    /* menu container div */
    menu.div = document.getElementById("map-menu");

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

    /* switch menu element */
    menu.switch = function(mapSection) {
      const btn = document.getElementById('map-button-' + mapSection + '-active');

      if (btn.classList.contains('active')) {
        menu.toggle();
      } else if (!btn.classList.contains('disabled')) {
        /* activate respective button */
        menu.activateBtn(mapSection);

        /* section */
        const sections = document.getElementsByClassName('map-section');

        /* reinitialize sections */
        [...sections].forEach(function(t) {
          t.classList.remove('active');
        });

        /* activate section */
        document.getElementById('map-section-' + mapSection).classList.add('active');

        /* first slide bug fix */
        if (mapSection === 'world')
          mapSection = 0;

        /* move to slide */
        window.fullpage_api.moveTo('map', mapSection);

        /* hide menu */
        menu.toggle();
      }
    };

    window.addEventListener('click', function(e) {
      /* click outside map menu */
      if (!menu.div.contains(e.target) ||
         e.target.tagName.toLowerCase() !== 'button') {
        /* hide div */
        menu.hide();
      }
    });
  }

  render() {
    return (
      <div id="map-menu" className="menu hidden">
        <button className="icon" onClick={menu.hide}>
          ☰
        </button>
        <button className="sticky active"
                id="map-button-world-active"
                onClick={function(){menu.switch('world')}}>
          World
        </button>
        <button className="sticky"
                id="map-button-vision-active"
                onClick={function(){menu.switch('vision')}}>
          Vision & Goals
        </button>
        <button className="sticky"
                id="map-button-path-active"
                onClick={function(){menu.switch('path')}}>
          Path
        </button>
        <button id="map-button-world"
                onClick={function(){menu.switch('world')}}>
          World
        </button>
        <button id="map-button-vision"
                onClick={function(){menu.switch('vision')}}>
          Vision & Goals
        </button>
        <button id="map-button-path"
                onClick={function(){menu.switch('path')}}>
          Path
        </button>
      </div>
    );
  }
}

export default MapMenu;
