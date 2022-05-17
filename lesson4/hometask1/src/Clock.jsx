import React, { Component } from 'react';
import moment from 'moment'

import './clock.scss';


 const getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
     return  new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset)) ;
}




class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.location,
      offset:props.offset
    };
      this.updateClock = () => {
      setInterval(() => {
        this.setState({ date: this.state.date });
      }, 1000);
    };
}

  render() {
this.updateClock()
    return (
      <div className="clock">
        <div className="clock__location">{`${this.state.location}`}</div>
        <div className="clock__time">{`${moment(getTimeWithOffset(this.state.offset)).format('LTS')}`}</div>
      </div>
    );
  }
}
export default Clock;

