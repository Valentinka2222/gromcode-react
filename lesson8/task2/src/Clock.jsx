import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset, currentTime) => {
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      location: props.location,
      offset: props.offset,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{`${this.state.location}`}</div>
        <div className="clock__time">{`${moment(
          getTimeWithOffset(this.state.offset, this.state.date),
        ).format('LTS')}`}</div>
      </div>
    );
  }
}
export default Clock;
