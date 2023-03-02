import React from 'react';

function Attendee(props) {
  return (
    <div className="attendee">
      <p>{props.attendee.name}</p>
      <p>{props.attendee.attending ? 'Attending' : 'Not Attending'}</p>
      <button className="toggle-attendee-button" onClick={props.onToggleAttendee}>Toggle Attendance</button>
    </div>
  );
}

export default Attendee;
