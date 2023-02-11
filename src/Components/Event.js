
 import Attendees from "./Attendees";


export default function Event( {events, setEvents}) {



 
  return  (
    <div className="events">
          <ul>
            {events.map((event) => {
              const {people: attendees}  = event;
              
              return (
                <Attendees attendees ={ attendees } event={ event } events={events}  setEvents={setEvents}/>
              );
            })}
          </ul>
        </div>

  );
}
