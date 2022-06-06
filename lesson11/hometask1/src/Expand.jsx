import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>

          <button className="expand__toggle-btn" onClick={this.props.onClose}>
            <i className={`fas ${this.props.arrow} `}></i>
          </button>
        </div>
        <div className="expand__content">{this.props.children}</div>
      </div>
    );
  }
};

Expand.propTypes = {

  children: PropTypes.element.isRequired,
  title: PropTypes.string,

  onClose: PropTypes.func.isRequired,
 
};
Expand.defaultProps = {
  title: '',
  isHide: false,
};

export default Expand;
