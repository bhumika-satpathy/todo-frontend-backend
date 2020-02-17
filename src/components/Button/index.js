import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button(props) {
  const { buttonName, buttonClick } = props;
  return (
    <div className="Button">
      <Link to="/new">
        <button type="button" onClick={buttonClick}>{buttonName}</button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default Button;
