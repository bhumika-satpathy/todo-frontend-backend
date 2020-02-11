import React, { Component } from 'react';
import profile from './images.png';
import './index.css';

class index extends Component {
  render() {
    return (
      <div>
        <img src={profile} className="profile-picture" />
      </div>
    );
  }
}

export default index;
