import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    isOnline: true,
    isClass: '',
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
      isOnline: true,
    });
  };
  offLine = () => {
    this.setState({
      isOnline: false,
    });
  };

  render() {
    return (
      <div className={this.state.isOnline ? 'status' : 'status status_offline'}>
        {this.state.isOnline ? 'online' : 'offline'}
      </div>
    );
  }
}
export default ConnectionStatus;
