import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super();
    console.log('good place to create state');
  }
  componentDidMount() {
    console.log('API calls, subcriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    console.log('deside to render or not to render');
    return nextProps.number;
  }

  componentWillUnMount(prevProps, prevState) {
    console.log('cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;
