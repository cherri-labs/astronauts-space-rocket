import React from 'react';
import { setCookieStrict, getCookie, deleteCookie } from '../../cookie';

// get cookie preferences
var wantCookies = getCookie('wantCookies');

// slider params
const min = [18, 25, 35];
const max = [22, 31, 42];
const def = [19, 26, 37];
var cur = getCookie('cur').split(', ') || def.slice();
const init = 1;
const ceil = 6;

function hidePopup() {
  // hide popup
  document.getElementById('yes-cookies').classList.remove('active');
  document.getElementById('no-cookies').classList.remove('active');
  // update lock state
  document.LockComponent.update();
}

// handle click outside popup msg box
const handleClick = (e) => {if (e.target.tagName !== 'button') {hidePopup();}}

function YesCookies() {
  return (
    <div id="yes-cookies" className="hidden-popup" onClick={handleClick}>
      <div className="msg-box">
        <p>
          Do you want to remember your preferences? You know this means <b>cookies</b>, right?
        </p>
        <div className="nav-container">
          <button onClick={yesIWantCookies}>I guess, if it's just a slider</button>
          <button onClick={noIDontWantCookies}>Please, don't</button>
        </div>
      </div>
    </div>
  );
}

function NoCookies() {
  return (
    <div id="no-cookies" className="hidden-popup" onClick={handleClick}>
      <div className="msg-box">
        <p>
          Do you want to delete all your <b>cookies</b>?
        </p>
        <div className="nav-container">
          <button onClick={yesIWantCookies}>Not as of now</button>
          <button onClick={noIDontWantCookies}>Yes, right away</button>
        </div>
      </div>
    </div>
  );
}

function doYouWantCookies() {
  // show popup
  document.getElementById('yes-cookies').classList.add('active');
}

function yesIWantCookies() {
  // update cookie preferences
  setCookieStrict('wantCookies', 'true');
  // update wantCookies variable
  wantCookies = getCookie('wantCookies');

  // hide popup and update lock state
  hidePopup();
}

function noMoreCookies() {
  // show popup
  document.getElementById('no-cookies').classList.add('active');
}

function noIDontWantCookies() {
  // update cookie preferences
  deleteCookie('wantCookies');
  // clear stored cookies
  deleteCookie('slider');
  deleteCookie('cur');
  // update wantCookies variable
  wantCookies = getCookie('wantCookies');

  // hide popup and update lock state
  hidePopup();
}

class Lock extends React.Component {
  constructor(props) {
    super(props);
    // bind this in functions
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
    // initialize lock state
    this.state = {open: '-open'};

    // assign this to call methods from outside of class
    document.LockComponent = this;
  }

  componentDidMount() {
    this.update();
  }

  handleClick() {
    if (wantCookies) {
      noMoreCookies();
    } else {
      doYouWantCookies();
    }
    this.update();
  }

  update() {
    if (wantCookies) {
      this.setState({ open: '' });
    } else {
      this.setState({ open: '-open' });
    }
  }

  render() {
    return (
      <a onClick={this.handleClick}>
        <img src={"img/icons/lock" + this.state.open + ".svg"} className="icon" alt="cookie" />
      </a>
    );
  }
}

class Slider extends React.Component {
  componentDidMount() {
    if (wantCookies) {
      // retrieve slider value from cookie
      const lastPos = getCookie('slider') || init;
      this.setState({value: lastPos});
    }
  }

  // returns string of rgb values
  bgColor(value) {
    if (value == init) {
      cur = def.slice(); // reset value
    } else if (value == 0) {
      cur = min.slice(); // min value
    } else if (value == ceil) {
      cur = max.slice(); // max value
    } else {
      // middle values
      cur[0] = min[0] + Math.floor(value/2);
      cur[1] = min[1] + parseInt(value);
      cur[2] = min[2] + parseInt(value) + 1;
    }

    // join current rgb values
    const curJoin = cur.join(', ');

    if (wantCookies) {
      // update cookie for cur
      setCookieStrict('cur', curJoin);
    }
    
    // return value string
    return 'rgb(' + curJoin + ')';
  }

  handleChange = (event) => {
    // current slider position
    const pos = event.target.value;
    // update slider value
    this.setState({value: pos});

    if (wantCookies) {
      // update slider value cookie
      setCookieStrict('slider', pos);
    }
    
    // update background color
    document.body.style.backgroundColor = this.bgColor(pos);
  };

  render() {
    return (
      <div className="night-mode">
        <YesCookies />
        <NoCookies />
        <div id="night-mode-slider">
          <img src="img/icons/moon.svg" className="icon" alt="night" />
          <input type="range" min="0" max={ceil}
                 value={this.state ? this.state.value : init}
                 onChange={this.handleChange} />
          <img src="img/icons/sun.svg" className="icon" alt="day" />
        </div>
        <Lock />
      </div>
    );
  }
}
export default Slider;
