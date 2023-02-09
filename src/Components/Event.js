import Attendees from "./Attendees";

function Event({ event, updateEventAttendance }) {
  const {people:attendees} = event
  return (
    <div>
      <li key={event.id} className="event">
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <Attendees 
          event={event}
          updateEventAttendance={updateEventAttendance}
        />
      </li>
    </div>
  );
}
export default Event