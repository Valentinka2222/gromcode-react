import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ' ',
    };
  }

  onMouseEnter = e => {
    this.setState({
      color: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            value="Coral"
            onMouseEnter={this.onMouseEnter}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onMouseEnter}
            value="Aqua"
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onMouseEnter}
            value="Bisque"
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
