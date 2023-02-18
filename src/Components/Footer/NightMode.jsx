import React from 'react';

const min = [18, 25, 35];
const max = [22, 31, 42];
const def = [19, 26, 37];
var cur = def.slice();
const init = 1;
const ceil = 6;

class Slider extends React.Component {
  bgColor(value) {
    if (value == init) {
      cur = def.slice();
    } else if (value == 0) {
      cur = min.slice();
    } else if (value == ceil) {
      cur = max.slice();
    } else {
      cur[0] = min[0] + Math.floor(value/2);
      cur[1] = min[1] + parseInt(value);
      cur[2] = min[2] + parseInt(value) + 1;
    }

    return 'rgb(' + cur.join(', ') + ')';
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    document.body.style.backgroundColor = this.bgColor(event.target.value);
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
