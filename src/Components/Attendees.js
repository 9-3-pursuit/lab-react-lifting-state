import { useState } from "react";
import Attendee from "./Attendee.js";

export default function Attendees({attendees, updateEventAttendance , events}){
  const [showAttendees, setShowAttendees] = useState(false);
  
  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <div>
        <button onClick={toggleEventAttendees}>
        <>  
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
        </>
        </button>
         <Attendee 
          showAttendees={showAttendees} 
          attendees={attendees} 
          updateEventAttendance={updateEventAttendance} 
          events={events}
          />
     </div>
  )
}
