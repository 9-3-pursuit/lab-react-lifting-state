import { useState } from "react";
import eventsData from "./data";
import Header from "./Components/Header";
import Event from "./Components/Event";
import NewEventForm from "./Components/NewEventForm";
import Footer from "./Components/Footer";

function App() {
  const [events, setEvents] = useState(eventsData);

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

export default App;
