import { useState } from "react";
export default function Event({ event }) {
  const [events, setEvents] = useState(eventsData);
  
  function handleSubmit(e) {
    e.preventDefault();
    addEvent();
    resetEventForm();
  }
  return;
}
