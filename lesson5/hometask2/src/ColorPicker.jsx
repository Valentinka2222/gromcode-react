import React, { Component } from 'react';

class ColorPicker extends Component {
  onMouseEnter(e) {
    const elementColorTitle = document.querySelector('.picker__title');
    elementColorTitle.textContent = e.target.value;
  }
  onMouseLeave() {
    const elementColorTitle = document.querySelector('.picker__title');
    elementColorTitle.textContent = '';
  }

  render() {
    return (
      <div>
        <div className="picker__title"></div>
        <div>
          <button
            className="picker__button picker__button_coral"
            value="Coral"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            value="Auqa"
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            value="Bisque"
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
