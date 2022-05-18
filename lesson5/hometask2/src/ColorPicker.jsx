import React, { Component } from 'react';

createAttrib(){
    const elementButtonCoral = document.querySelector('.picker__button_coral');
    const elementButtonAuqa = document.querySelector('.picker__button_aqua');
    const elementButtonBisque = document.querySelector('.picker__button_bisque');
    elementButtonAuqa.setAttribute('value', 'Aqua');
    elementButtonCoral.setAttribute('value', 'Coral');
    elementButtonBisque.setAttribute('value', 'Bisque');
}
class ColorPicker extends Component {
  onMouseEnter(e) {
createAttrib()
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
