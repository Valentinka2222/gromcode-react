import React, { Component } from 'react';
import Clock from './Clock';

const navigation = [
  { location: 'Kiev', offset: 20 },
  { location: 'Toronto', offset: 5 },
  { location: 'Japan', offset: 1 },
];
const clockList = navigation => {
  return navigation.map(({ location, offset }) => (
    <>
      <Clock location={location} offset={offset} />
    </>
  ));
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && clockList(navigation)}</div>
      </div>
    );
  }
}
export default App;
