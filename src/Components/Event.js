import Attendees from "./Attendees";

export default function Event({events, updateEventAttendance}) {


  return(
    <div className="events">
      <ul>
        {events.map((event) => {
          const { people: attendees } = event
          return (
            <div className="event">
              <li key={event.id}>
                <img src={event.eventImage} alt={event.name} />
                <h5>
                  {event.name} {event.eventType}
                </h5>
                <br />
                <span>Organized by: {event.organizer} </span>
                <br />
                <Attendees 
                attendees={attendees} 
                updateEventAttendance={updateEventAttendance} 
                event={event} 
                />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  )
}