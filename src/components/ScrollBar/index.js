import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './index.css';

function index(props) {
  const { todos, onClickDone } = props;
  console.log(todos);
  const todoList = todos.map((value) => (
    <Card
      text={value}
      onClickDone={(text) => onClickDone(text)}
    />
  ));
  return (
    <div className="ScrollBar">
      {todoList}
    </div>
  );
}
index.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onClickDone: PropTypes.func.isRequired,
};
export default index;
