
export default function Event({events, updateEventAttendance, Attendees}) {
  return (
    <ul>
      {events.map((event) => {
        const { people: attendees } = event;

        return (
          <>
            <li key={event.id} className="event">
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />
              <Attendees
                updateEventAttendance={updateEventAttendance}
                attendees={attendees}
                event={event}
              />
            </li>
          </>
        );
      })}
    </ul>
  );
}