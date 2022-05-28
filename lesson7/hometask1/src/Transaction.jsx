import React from 'react';
import moment from 'moment';

const formatNumber = number => new Intl.NumberFormat('en-GB').format(number);

const Transaction = ({ from, to, amount, rate, time }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment().locale('en').format('DD MMM')}</span>
      <span className="transaction__time">{moment(time).format('HH:mm')}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{formatNumber(rate)}</span>
      <span className="transaction__amount">{formatNumber(amount)}</span>
    </li>
  );
};
export default Transaction;
