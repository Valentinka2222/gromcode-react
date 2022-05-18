import React, { Component } from 'react';

class ColorPicker extends Component {
  handleClick(e) {
    const elementColorTitle = document.querySelector('.picker__title');
    elementColorTitle.textContent = e.target.value;
  }

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            value="Coral"
            onMouseEnter={this.handleClick}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.handleClick}
            value="Aqua"
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.handleClick}
            value="Bisque"
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
