import React from 'react';
import Attendee from './Attendee';

function Attendees(props) {
  const { attendees, toggleAttendance } = props;

  return (
    <div className="attendees">
      {attendees.map((attendee) => (
        <Attendee key={attendee.id} attendee={attendee} toggleAttendance={toggleAttendance} />
      ))}
    </div>
  );
}

export default Attendees;
