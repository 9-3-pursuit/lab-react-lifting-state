
  
import { useState } from "react";
import Attendee from "./Attendee";
export default function Attendees({ updateEventAttendance, attendees, event }) {
  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
            <>
              <Attendee
                updateEventAttendance={updateEventAttendance}
                attendee={attendee}
                event={event}
              />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}