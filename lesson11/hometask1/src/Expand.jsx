import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isArrow, isHide, children, title, onClose, onShow }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>

        <button className="expand__toggle-btn" onClick={isHide ? onClose : onShow}>
          <i className={`fas ${isArrow}`}></i>
        </button>
      </div>
      {!isHide ? <div className="expand__content">{children}</div> : null}
    </div>
  );
};

Expand.propTypes = {
  isHide: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  isArrow: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};
Expand.defaultProps = {
  title: '',
  isHide: false,
};

export default Expand;
