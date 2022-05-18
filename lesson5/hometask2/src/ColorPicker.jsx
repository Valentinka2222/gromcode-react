import React, { Component } from 'react';


class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
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
          
          onMouseEnter = {() => this.setState({ text: "Coral" }) }
            onMouseLeave={this.onMouseLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
                   onMouseEnter = {() =>  this.setState({ text: "Aqua" }) }
            onMouseLeave={this.onMouseLeave}
      
          ></button>
          <button
            className="picker__button picker__button_bisque"
                         onMouseEnter = {() =>  this.setState({ text: "Bisque" }) }
            onMouseLeave={this.onMouseLeave}
        
          ></button>
        </div>
      </div>
    );
  }
}
export default ColorPicker;
