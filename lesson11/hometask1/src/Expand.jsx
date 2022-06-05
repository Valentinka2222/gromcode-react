import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isArrow, isHide, children, title, onClose }) => {
  if (!isHide) {
    return null;
  }

  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className={`fas ${isArrow}`}></i>
        </button>
      </div>
      <div className="expand__content"> {children}</div>
    </div>
  );
};
<button className="expand__toggle-btn"></button>;

Expand.propTypes = {
  isHide: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
Expand.defaultProps = {
  title: '',
  isHide: false,
};

export default Expand;
