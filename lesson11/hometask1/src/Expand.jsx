import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isHide, title, onClose, arrow, children }) => {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className={`fas ${arrow} `}></i>
        </button>
      </div>
      {!isHide ? <div className="expand__content">{children}</div> : null}
    </div>
  );
};

Expand.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
Expand.defaultProps = {
  title: '',
  isHide: true,
};

export default Expand;
