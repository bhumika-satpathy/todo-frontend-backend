import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import Button from '../Button';
import './index.css';


function TextBox(props) {
  const { buttonClick } = props;
  return (
    <div className="TextBox">
      <h2>CREATE TO-DO</h2>
      <Text />
      <br />
      <Button buttonName="SUBMIT" buttonClick={buttonClick} />
    </div>
  );
}

TextBox.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
export default TextBox;
