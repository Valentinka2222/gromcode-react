import React, { Component } from 'react';
import moment from 'moment';

import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      date: new Date(),
    };
    this.updateClock = () => {
      setInterval(() => {
        this.setState({ date: new Date() });
      }, 1000);
    };
    this.getTimeWithOffset = () => {
      let stringOffset = '0000';
      stringOffset =
        stringOffset.substr(0, 1) + `${props.offset}` + stringOffset.substr(props.offset, 1);

      const date = moment.utc(this.state.date).utcOffset(`'${stringOffset}'`).format('LTS');
      return date;
    };
  }

  render() {
    this.updateClock();
    return (
      <div className="clock">
        <div className="clock__location">{`${this.state.location}`}</div>
        <div className="clock__time">{this.getTimeWithOffset()}</div>
      </div>
    );
  }
}
export default Clock;
