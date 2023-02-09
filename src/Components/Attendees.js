import Attendee from "./Attendee";
import { useState } from "react";


export default function Attendees({attendees, event, updateEventAttendance}) {
  const [showAttendees, setShowAttendees] = useState(false);
  
  
  function toggleEventAttendees(e) {
    setShowAttendees(!showAttendees);
  }
    

  return(
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
      {showAttendees ? (
        <div className="attendees">
         {attendees.map((attendee, index) => (
           <Attendee 
           attendee={attendee} 
           event={event}
           updateEventAttendance={updateEventAttendance}
         />
         ))}
       </div>
      ) : null}
    </>
    
  )
}



                