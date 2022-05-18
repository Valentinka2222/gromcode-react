import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onMouseEnter(e) {
    const elementButtonCoral = document.querySelector('.picker__button_coral');
    const elementButtonAuqa = document.querySelector('.picker__button_aqua');
    const elementButtonBisque = document.querySelector('.picker__button_bisque');
    elementButtonAuqa.setAttribute('value', 'Auqa');
    elementButtonCoral.setAttribute('value', 'Coral');
    elementButtonBisque.setAttribute('value', 'Bisqua');
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
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
