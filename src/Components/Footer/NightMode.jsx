import React from 'react';
import { setCookieStrict, getCookie } from '../../cookie';

const min = [18, 25, 35];
const max = [22, 31, 42];
const def = [19, 26, 37];
var cur = getCookie('cur').split(', ') || def.slice();
const init = 1;
const ceil = 6;

class Slider extends React.Component {
  componentDidMount() {
    // retrieve slider value from cookie
    const lastPos = getCookie('slider');
    this.setState({value: lastPos});
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
    // update cookie for cur
    setCookieStrict("cur", curJoin);
    // return value string
    return 'rgb(' + curJoin + ')';
  }

  handleChange = (event) => {
    // current slider position
    const pos = event.target.value;
    // update slider value
    this.setState({value: pos});
    // update slider value cookie
    setCookieStrict("slider", pos);
    // update background color
    document.body.style.backgroundColor = this.bgColor(pos);
  };

  render() {
    return (
      <div className="night-mode">
        <img src="img/icons/night.svg" className="icon" alt="night" />
        <input type="range" min="0" max={ceil}
               value={this.state ? this.state.value : init}
               onChange={this.handleChange} />
        <img src="img/icons/day.svg" className="icon" alt="day" />
      </div>
    );
  }
}
export default Slider;
