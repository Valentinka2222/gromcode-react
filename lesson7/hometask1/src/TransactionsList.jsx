import React from 'react';
import Transaction from './Transaction';
import { Component } from 'react';

class TransactionsList extends Component {
  render() {
    return (
      <div className="transactions">
        <ul>
          {this.props.transactions.map(transaction => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
        </ul>
      </div>
    );
  }
}
export default TransactionsList;
