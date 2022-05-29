import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super();
    console.log('constructor: good place to create state');
  }
  componentDidMount() {
    console.log(' componentDidMount: API calls, subcriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log('shouldComponentUpdate(nextProps, nextState): deside to render or not to render');
    return nextProps.number;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(' componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnMount() {
    console.log('componentWillUnMount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div>{this.props.number}</div>;
  }
}

export default Life;
