import Event from "./Event";

export default function EventList({ events, setEvents }) {
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
      <ul className="events">
        {events.map((event) => (
          <Event
            key={event.id}
            event={event}
            updateEventAttendance={updateEventAttendance}
          />
        ))}
      </ul>
    </>
  );
}
