import { useState } from "react";
import eventsData from "./data";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";
import Footer from "./Components/Footer";
import EventList from "./Components/EventList";

function App() {
  const [events, setEvents] = useState(eventsData);

  return (
    <div className="App">
      <Header />
      <main>
        <NewEventForm events={events} setEvents={setEvents} />
        <EventList events={events} setEvents={setEvents} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
