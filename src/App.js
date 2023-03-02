import { useState } from "react";
import eventsData from "./data";
 import Event from "./Components/Event";
 import Footer from "./Components/Footer";
// import Header from "./Components/Header";
 import NewEventForm from "./Components/NewEventForm";

function App() {

  const [events, setEvents] = useState(eventsData);

  return (
    <div className="App">
      <>
        <header>
          <h1 className="color-change-5x">RSVP App</h1>
        </header>
      </>
      <main>
        <NewEventForm events={events} setEvents={setEvents}/>
        
        <Event events={events} setEvents={setEvents}/>
      </main>
      <>
        <footer>
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>Legal</li>
          </ul>
        </footer>
      </>
    </div>
  );
}

export default App;
