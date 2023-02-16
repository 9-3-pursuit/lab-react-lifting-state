import { useState, useContext } from "react";
import { eventsContext, setEventsContext } from "../../Data/eventsContext";
import { v1 as generateUniqueID } from "uuid";
import TextInputSection from "./TextInputSection";
import SelectSection from "./SelectSection";

export default function NewEventForm() {
  const INITIAL_STATE = {
    id: generateUniqueID(),
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  };
  const [newFormEvent, setNewFormEvent] = useState(INITIAL_STATE);
  const events = useContext(eventsContext);
  const setEvents = useContext(setEventsContext);

  function handleSubmit(e) {
    e.preventDefault();
    setEvents([newFormEvent, ...events]);
    setNewFormEvent(INITIAL_STATE);
  }

  return (
    <>
      <div className="new-event">
        <form onSubmit={handleSubmit}>
          <h3>Create a new event</h3>
          <TextInputSection
            newEvent={newFormEvent}
            setNewEvent={setNewFormEvent}
          />
          <SelectSection
            newEvent={newFormEvent}
            setNewEvent={setNewFormEvent}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
