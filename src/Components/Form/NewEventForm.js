import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";
import Input from "./Input";

export default function NewEventForm({ events, setEvents }) {
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
    handleAddEvent(createEvent);
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

  function handleSelectChange(e) {
    setSelectOption(e.target.value);
  }

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  return (
    <>
      <div className="new-event">
        <form onSubmit={handleSubmit}>
          <h3>Create a new event</h3>
          <Input
            id="name"
            title={"Event name"}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
          />
          <Input
            id="organizer"
            title={"Organizer"}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
          />
          <Input
            id="eventImage"
            title={"Event image"}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
          />
          <label htmlFor="eventType">Event type:</label>
          <select id="eventType" onChange={handleSelectChange}>
            <option value=""></option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Intramural Sport">Intramural Sport</option>
            <option value="Watch Party">Watch Party</option>
            <option value="wedding">Wedding</option>
          </select>
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
