import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({ attendees, event, events, setEvents }) {

  const [showAttendees, setShowAttendees] = useState(false);

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

 

  return (
    <>
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

                      {showAttendees ? (
                        <div className="attendees">
                          {attendees.map((attendee, index) => (
 <>
 <div key={attendee.id} className="attendee">
   <p>
     <img
       src={attendee.avatar}
       alt={attendee.firstName}
     />
     {"   "}
     <span>
       {" "}
       {attendee.firstName} {attendee.lastName}{" "}
     </span>
   </p>
   <p>
     < Attendee attendee={attendee}  events={events} setEvents={setEvents} event={event}/>
     <span>
       {attendee.attendance ? "✅" : "❌"}
     </span>
   </p>

   <p>
     <span>Note:</span> {attendee.note}
   </p>
 </div>
</>
                           


                          
                          ))}
                        </div>
                      ) : null}
                    </>
                  </li>
                </>
  );
}