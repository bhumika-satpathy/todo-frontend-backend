import React from 'react';
import PropTypes from 'prop-types';
import ScrollBar from '../ScrollBar';
import Button from '../Button';
import './index.css';

function index(props) {
  const { buttonClick, todos, onClickDone } = props;
  return (
    <div className="list">
      <h2 className="text">ALL TO-DOS</h2>
      <ScrollBar todos={todos} onClickDone={(text) => onClickDone(text)} />
      <Button buttonName="CREATE NEW" buttonClick={buttonClick} />
    </div>
  );
}

index.propTypes = {
  buttonClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default index;
