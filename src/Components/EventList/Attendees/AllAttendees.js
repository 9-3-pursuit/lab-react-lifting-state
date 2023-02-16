import { useState } from "react";
import AttendeeAttendanceButton from "./AttendeeAttendanceButton";
import SingleAttendee from "./SingleAttendee";

export default function AllAttendees({ event, event: { people: attendees } }) {
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
          {attendees.map((attendee) => (
            <SingleAttendee key={attendee.id} attendee={attendee}>
              <AttendeeAttendanceButton attendee={attendee} event={event} />
            </SingleAttendee>
          ))}
        </div>
      ) : null}
    </>
  );
}
