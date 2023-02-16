import { useState, useContext } from "react";
import { eventsContext, setEventsContext } from "../../Data/eventsContext";
import { v1 as generateUniqueID } from "uuid";
import TextInputSection from "./TextInputSection";
import SelectSection from "./SelectSection";

export default function NewEventForm() {
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

  const events = useContext(eventsContext);
  const setEvents = useContext(setEventsContext);

  function handleSubmit(e) {
    e.preventDefault();
    addEvent();
    resetEventForm();
  }

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
    setEvents([createEvent, ...events]);
  }

  function resetEventForm() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    setSelectOption("");
  }

  return (
    <>
      <div className="new-event">
        <form onSubmit={handleSubmit}>
          <h3>Create a new event</h3>
          <TextInputSection newEvent={newEvent} setNewEvent={setNewEvent} />
          <SelectSection setSelectOption={setSelectOption} />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
