/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ProfileSection from '../ProfileSection';
import './index.css';
import NotesSection from '../NotesSection';

class index extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { buttonClick, todos, onClickDone } = this.props;
    console.log('ALL Todos', todos);
    return (
      <div className="main">
        <ProfileSection />
        <NotesSection buttonClick={buttonClick} todos={todos} onClickDone={(text) => onClickDone(text)} />
      </div>
    );
  }
}

export default index;
