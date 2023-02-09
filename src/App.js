import { useState } from "react";
import eventsData from "./data";

import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);
  
  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  return (
    <div className="App">
      <Header/>
      <main>
          <NewEventForm handleAddEvent={handleAddEvent}/>
          <Event events={events} useEvents={setEvents} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
