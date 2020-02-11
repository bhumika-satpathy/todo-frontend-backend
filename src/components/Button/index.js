import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName, buttonClick } = props;
  return (
    <div className="Button">
      <button type="button" onClick={buttonClick}>{buttonName}</button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default Button;
