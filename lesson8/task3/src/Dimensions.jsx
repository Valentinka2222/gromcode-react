import React, { Component } from 'react';

class Dimension extends Component {
  state = {
    width: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    const { innerWidth, innerHeight } = window;
    this.setDimention(innerHeight, innerWidth);
  }
  componenWillUnMount() {
    window.removeEventListener('resize', this.onResize);
  }
  onResize = e => {
    const { innerWidth, innerHeight } = e.target;

    this.setDimention(innerHeight, innerWidth);
  };

  setDimention = (width, height) => {
    this.setState({
      width,
      height,
    });
  };

  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
}
export default Dimension;
