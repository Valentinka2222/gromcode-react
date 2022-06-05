import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: false,
      isArrow: 'fa-chevron-down',
    };
  }

  showExpand = () => {
    this.setState({
      isHide: true,
      isArrow: 'fa-chevron-up',
    });
  };
  hideExpand = () => {
    this.setState({
      isHide: false,
      isArrow: 'fa-chevron-down',
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>

          <button
            className="expand__toggle-btn"
            onClick={!this.state.isHide ? this.showExpand : this.hideExpand}
          >
            <i className={`fas ${this.state.isArrow}`}></i>
          </button>
        </div>
        {this.state.isHide ? <div className="expand__content">{this.props.children}</div> : null}
      </div>
    );
  }
}

export default Expand;
