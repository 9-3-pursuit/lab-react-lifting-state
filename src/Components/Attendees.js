import Attendee from "./Attendee"
import { useState } from "react";
export default function Attendees({attendees, events, event, setEvent}) {
    const [showAttendees, setShowAttendees] = useState(false);
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }
  return(<>
   <button onClick={toggleEventAttendees}>
    {!showAttendees ? "Show Attendees" : "Hide Attendees"}
   </button>

  {showAttendees ? (<div className="attendees"> {attendees.map((attendee, index) => (<Attendee attendee={attendee} event = {event}events={events} setEvents={setEvent}/>))}</div>) : null }
        
  

</>)
}
