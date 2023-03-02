import React from 'react';
import Attendees from './Attendees';

function Event(props) {
  const { id, title, date, attendees, showAttendees } = props.event;

  const handleAttendeesView = () => {
    props.toggleAttendeesView(id);
  };

  return (
    <li className="event">
      <h2>{title}</h2>
      <p>{date}</p>
      <button onClick={handleAttendeesView}>
        {showAttendees ? 'Hide' : 'Show'} Attendees
      </button>
      {showAttendees && <Attendees attendees={attendees} toggleAttendance={props.toggleAttendance} />}
    </li>
  );
}

export default Event;
