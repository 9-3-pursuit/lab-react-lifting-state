import Attendees from "./Attendees";

export default function EventItem({ event }) {
  return (
    <>
      <li key={event.id} className="events">
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <Attendees event={event} />
      </li>
    </>
  );
}
