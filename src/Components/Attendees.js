import Attendee from "./Attendee";
import { useState } from "react";

export default function Attendees({attendees}, {events, setEvents}) {

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
        <Attendee attendee={attendee} events={events} setEvents={setEvents} />
        ))}
        </div>
      ) : null}
    </>
  )
}
