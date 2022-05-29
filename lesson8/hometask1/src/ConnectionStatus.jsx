import React, { Component } from 'react';
import moment from 'moment';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
    offlineClass: '',
  };

  componentDidMount() {
    window.addEventListener('online', this.onLine);
    window.addEventListener('offline', this.offLine);
    console.log(document.querySelector('div').innerHTML);
  }
  componentWillUnmount() {
    window.removeEventListener('online', this.onLine);
    window.removeEventListener('offline', this.offLine);
  }

  onLine = () => {
    this.setState({
      status: 'online',
    });
  };
  offLine = () => {
    this.setState({
      status: 'offline',
    });
  };

  render() {
    return (
      <div className={this.state.status ? 'status' : 'status  status_offline'}>
        {this.state.status}
      </div>
    );
  }
}
export default ConnectionStatus;
