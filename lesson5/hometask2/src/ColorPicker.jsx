import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onMouseEnter = e => {
    this.setState({
      text: e.target.dataset.color,
    });
  };
  onMouseLeave = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            data-color="Coral"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            data-color="Aqua"
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            data-color="Bisque"
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
