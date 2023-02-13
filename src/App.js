import { useState } from "react";
import eventsData from "./data";


import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";
import { v1 as generateUniqueID } from "uuid";

function App() {
 
  const [events, setEvents] = useState(eventsData);
 

  const [selectOption, setSelectOption] = useState("");

  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

 
  
  function addEvent() {
    const createEvent = {
      id: generateUniqueID(),
      eventType: selectOption,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
      date: newEvent.date,
      people: [],
    };
    handleAddEvent(createEvent);
  }
 

 

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

 

  return (
    <div className="App">
      <Header />
      
      <main>
        
       
       < NewEventForm  setEvents={ setEvents } newEvent={newEvent} setSelectOption={ setSelectOption } setNewEvent={setNewEvent} addEvent={addEvent}/>
       < Event  events={ events } setEvents={ setEvents }/>
       </main>
     <Footer />
    </div>
  );
}

export default App;