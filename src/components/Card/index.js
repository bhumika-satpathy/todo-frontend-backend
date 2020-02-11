import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Card(props) {
  const { text, onClickDone } = props;
  return (
    <div className="card">
      <p>{text}</p>
      <button type="button" onClick={() => onClickDone(text)}>DONE</button>
    </div>
  );
}
Card.propTypes = {
  text: PropTypes.string.isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default Card;
