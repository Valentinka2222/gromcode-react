import React, { Component } from 'react';
import App from './App';

import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      date: new Date(),
    };
    this.getTimeWithOffset = () => {
      let diff = Math.abs(this.state.date.getHours() - props.offset);
      let minutes = this.state.date.getMinutes();
      minutes = minutes < 10 ? '0' + minutes : minutes;
      let date = `${diff}:${minutes}:${this.state.date.getSeconds()} `;
      if (this.state.date.getHours() >= 12) {
        date = date + 'PM';
      } else {
        date = date + 'AM';
      }
      return date;
    };
  }

  render() {
    this.getTimeWithOffset();
    console.log(this.state.date);

    return (
      <div className="clock">
        <div className="clock__location">{`${this.state.location}`}</div>
        <div className="clock__time">{this.getTimeWithOffset()}</div>
      </div>
    );
  }
}
export default Clock;
