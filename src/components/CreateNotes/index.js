import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import TextBox from '../TextBox';
import ProfileSection from '../ProfileSection';

function CreateNotes(props) {
  const { buttonClick } = props;
  return (
    <div className="CreateNotes">
      <ProfileSection />
      <TextBox buttonClick={buttonClick} />
    </div>
  );
}
CreateNotes.propTypes = {
  buttonClick: PropTypes.func.isRequired,
};
export default CreateNotes;
