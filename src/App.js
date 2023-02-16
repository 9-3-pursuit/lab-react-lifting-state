import { useState } from "react";
import eventsData from "./data";
import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import NewEventForm from "./Components/Form/NewEventForm";
import EventList from "./Components/EventList/EventList";

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
