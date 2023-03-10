export default function Attendee({ attendee, events, setEvents, event }) {
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
    <button
      className="clickable"
      onClick={() => updateEventAttendance(event.id, attendee.id)}
    >
      Attending:
    </button>
  );
}
