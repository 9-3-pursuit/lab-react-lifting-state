import Attendees from "./Attendees";
import { useState } from "react";

export default function Event({ event, attendees, updateEventAttendance }) {
  const [showAttendees, setShowAttendees] = useState(false);
  
  const toggleEventAttendees = () => {
    setShowAttendees(!showAttendees);
  }

  return (
    <div className="event">
      <li key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <>
          <button onClick={toggleEventAttendees}>
            {!showAttendees ? "Show Attendees" : "Hide Attendees"}
          </button>

          {showAttendees && (
            <Attendees
              attendees={attendees}
              updateEventAttendance={updateEventAttendance}
              event={event}
            />
          )}
        </>
      </li>
    </div>
  );
}
