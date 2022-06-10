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
    const { isHide } = this.state;
    isHide ? (this.arrow = 'fa-chevron-down') : (this.arrow = 'fa-chevron-up');
    const { title,children } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>

          <button className="expand__toggle-btn" onClick={this.hideExpand}>
            <i className={`fas ${this.arrow} `}></i>
          </button>
        </div>
        {isHide ? null : <div className="expand__content">{children}</div>}
      </div>
    );
  }
}
Expand.propTypes = {
  isHide: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};
Expand.defaultProps = {
  title: '',
  isHide: true,
};

export default Expand;
