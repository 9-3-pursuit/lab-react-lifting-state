import Attendees from "./Attendees"
import { useState } from "react";

export default function Event({setEvents, events}) {

  return(<>
  <div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees } = event;
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
                     <Attendees attendees={attendees} event = {event}events={events} setEvents={setEvents}/>
                    </>
                  </li>
                </>
              );
            })}
          </ul>
        </div></>)
}
