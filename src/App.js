import { useState } from "react";
import eventsData from "./data";
// import Attendees from "./Attendees";
// import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Attendee from "./Components/Attendee";
// import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

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
    <div className="App">
      <Header />
      <main>
        <div className="new-event">
        </div>
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
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default App;