import { Component } from 'react';
import React from 'react';
import Online from './Online';
import Offline from './Offline';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: false,
    };
  }

  render() {
    return <div className="status">{this.state.isOnline ? <Online /> : <Offline />}</div>;
  }
}
export default Status;