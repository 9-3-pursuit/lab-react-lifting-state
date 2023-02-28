import React from "react";
import { useState } from "react";
import eventsData from "./data";
import NewEventForm from "./Components/NewEventForm";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  const [events, setEvents] = useState(eventsData);
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className="new-event">
          <NewEventForm 
            events={events}
            setEvents={setEvents}/>
        </div>
        <div className="events">
          <ul>
            <Event 
              events={events}
            />
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;
