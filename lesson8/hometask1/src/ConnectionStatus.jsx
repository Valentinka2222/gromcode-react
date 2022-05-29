import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    online: true,
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
      online: true,
    });
  };
  offLine = () => {
    this.setState({
      online: false,
    });
  };

  render() {
    return (
      <div className={this.state.online ? 'status' : 'status status_offline'}>
        {this.state.online ? 'online' : 'offline'}
      </div>
    );
  }
}
export default ConnectionStatus;
