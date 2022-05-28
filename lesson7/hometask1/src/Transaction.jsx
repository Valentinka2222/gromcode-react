import React from 'react';
import moment from 'moment';

const formatTime = time => moment(time).format('HH:mm');
const formatDate = () => moment().locale('en').format('DD MMMM');
const formatNumber = number => new Intl.NumberFormat('en-GB').format(number);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{formatDate()}</span>
      <span className="transaction__time">{formatTime(time)}</span>
      <span className="transaction__assets">{from}</span>
      <span className="transaction__assets">{to}</span>
      <span className="transaction__rate">{formatNumber(rate)}</span>
      <span className="transaction__amount">{formatNumber(amount)}</span>
    </li>
  );
};
export default Transaction;
