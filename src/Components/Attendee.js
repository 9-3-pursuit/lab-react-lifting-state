import { useState } from "react";

export default function Attendee({ attendee, events, setEvents }) { 
  const [attendance, setAttendance] = useState(attendee.attendance);
  const [event, setEvent] = useState();
  
  function updateEventAttendance(eventId, attendeeId) {
    console.log("hey")
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    setEvent({ ...eventArray[eventIndex]});
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    setAttendance(peopleArray[personIndex].attendance)
    setAttendance(!peopleArray[personIndex].attendance)
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }
 
  return (
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
          <button
            className="clickable"
            onClick={() =>
              updateEventAttendance(
                // event.id,
                attendee.id
              )
            }
          >
            Attending:
          </button>
          <span>
            { attendee.attendence ? "✅" : "❌"}
          </span>
        </p>

        <p>
          <span>Note:</span> {attendee.note}
        </p>
      </div>
    </>
  )
}
