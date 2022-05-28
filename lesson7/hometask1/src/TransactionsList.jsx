import React from 'react';
import Transaction from './Transaction';
import { Component } from 'react';

class TransactionsList extends Component {
  render() {
    let transactionsNew = this.props.transactions;
    console.log(transactionsNew);

    return (
      <div className="transactions">
        <ul>
          {transactionsNew.map(transaction => (
            <Transaction key={transaction.time} {...transaction} />
          ))}
        </ul>
      </div>
    );
  }
}
export default TransactionsList;
