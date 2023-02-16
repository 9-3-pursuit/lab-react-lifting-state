import { useContext } from "react";
import { eventsContext, setEventsContext } from "../../../Data/eventsContext";

export default function AttendeeAttendanceButton({ event, attendee }) {
  const events = useContext(eventsContext);
  const setEvents = useContext(setEventsContext);

  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  return (
    <>
      <p>
        <button
          className="clickable"
          onClick={() => updateEventAttendance(event.id, attendee.id)}
        >
          Attending:
        </button>
        <span>{attendee.attendance ? "✅" : "❌"}</span>
      </p>
    </>
  );
}
