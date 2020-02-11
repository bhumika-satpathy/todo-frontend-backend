import React from 'react';
import './index.css';

function currentTime() {
  const d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}

function currentDate() {
  const months = [];
  months[0] = 'January';
  months[1] = 'February';
  months[2] = 'March';
  months[3] = 'April';
  months[4] = 'May';
  months[5] = 'June';
  months[6] = 'July';
  months[7] = 'August';
  months[8] = 'September';
  months[9] = 'October';
  months[10] = 'November';
  months[11] = 'December';

  const d = new Date();
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const strDate = `${day} ${month},${year}`;
  return strDate;
}

function DateTime() {
  return (
    <div className="DateTime">
      <h2>
        <center>
          { currentTime() }
        </center>

      </h2>
      <h2>
        { currentDate() }
      </h2>
    </div>
  );
}

export default DateTime;
