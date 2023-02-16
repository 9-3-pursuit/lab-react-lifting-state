import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({ event, event: { people: attendees } }) {
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
            <Attendee key={attendee.id} attendee={attendee} event={event} />
          ))}
        </div>
      ) : null}
    </>
  );
}
