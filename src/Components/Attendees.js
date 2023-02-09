import Attendee from "./Attendee";
import { useState } from "react"


export default function Attendees({ toggleEventAttendees, updateEventAttendance, attendees, event }) {
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
              <Attendee attendee={attendee} updateEventAttendance={updateEventAttendance} event={event} />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}
