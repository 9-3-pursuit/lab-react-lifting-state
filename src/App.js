import { useState } from "react";
import eventsData from "./data";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Attendee from "./Components/Attendee";
// import Attendees from "./Attendees";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }
  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    return (
      <div className="App">
        <Header />
        <main>
        <div className="new-event">
        <NewEventForm handleAddEvent={handleAddEvent} />
        </div>
        <div className="events">
        <ul>
        {events.map((event) => (
              <Event
                event={event}
                updateEventAttendance={updateEventAttendance}
              />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
}
export default App;