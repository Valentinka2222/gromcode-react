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
    const { isHide, isArrow } = this.state;
    const { children, title } = this.props;
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{title}</span>

          <button
            className="expand__toggle-btn"
            onClick={!isHide ? this.showExpand : this.hideExpand}
          >
            <i className={`fas ${isArrow}`}></i>
          </button>
        </div>
        {isHide ? <div className="expand__content">{children}</div> : null}
      </div>
    );
  }
}

Expand.propTypes = {
  isHide: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  isArrow: PropTypes.string,
};
Expand.defaultProps = {
  title: '',
  isHide: false,
};

export default Expand;
