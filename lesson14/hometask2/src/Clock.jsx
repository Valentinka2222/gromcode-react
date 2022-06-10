import React, { useState, useEffect, Component } from 'react';
import moment from 'moment';

const Clock = ({ location, offset }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, [date]);
  const getTimeWithOffset = offset => {
    const currentTime = date;
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
  };

  return (
    <div className="clock">
      <div className="clock__location">{`${location}`}</div>
      <div className="clock__time">{`${moment(getTimeWithOffset(offset)).format('LTS')}`}</div>
    </div>
  );
};

export default Clock;
