import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    isHide: true,
  };

  hideExpand = () => {
    this.setState({
      isHide: !this.state.isHide,
    });
  };
  render() {
    let elemContent;
    if (!this.state.isHide) {
      this.arrow = 'fa-chevron-down';
    } else {
      elemContent = <div className="expand__content">{this.props.children}</div>;
      this.arrow = 'fa-chevron-up';
    }

    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>

          <button className="expand__toggle-btn" onClick={this.hideExpand}>
            <i className={`fas ${this.arrow} `}></i>
          </button>
        </div>
        {elemContent}
      </div>
    );
  }
}

export default Expand;
