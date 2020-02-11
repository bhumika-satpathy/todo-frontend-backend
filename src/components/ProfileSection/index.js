import React, { Component } from 'react';
import DisplayPicture from '../DisplayPicture';
import DateTime from '../DateTime';
import './index.css';

class index extends Component {
  render() {
    return (
      <div className="sidebar">
        <DisplayPicture />
        <div className="text">HI, BHUMIKA!</div>
        <DateTime />
      </div>
    );
  }
}

export default index;
