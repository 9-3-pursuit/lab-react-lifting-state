import { useState } from "react";
import Attendee from "./Attendee";

function Attendees() {
  const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return(
    <div>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {attendees.map((attendee, index) => (
              <Attendee />
          ))}
        </div>
      ) : null}
    </div>
  )
}
export default Attendees