import React, { Component } from 'react';
import moment from 'moment';

import './clock.scss';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      date: props.date,
    };
    this.updateClock = () => {
      console.log(this);
      setInterval(() => {
        this.setState({ date: this.state.date });
      }, 1000);
    };

    this.getTimeWithOffset = () => {
      let stringOffset = '0000';
      if (props.offset > 10) {
        stringOffset = stringOffset.substr(0, 1) + `${props.offset}` + stringOffset.substr(3);
      } else {
        stringOffset = stringOffset.substr(0, 1) + `${props.offset}` + stringOffset.substr(2);
      }
      const timeRegion = moment.utc(props.date).utcOffset(`'${stringOffset}'`).format('LTS');

      return timeRegion;
    };
  }

  render() {

    this.updateClock();
    return (
      <div className="clock">
        <div className="clock__location">{`${this.state.location}`}</div>
        <div className="clock__time">{`${this.getTimeWithOffset()}`}</div>
      </div>
    );
  }
}
export default Clock;
