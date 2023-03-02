import React, { useState } from 'react';

function NewEventForm(props) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [organizer, setOrganizer] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const newEvent = {
      name: eventName,
      date: eventDate,
      organizer: organizer,
      attendees: []
    };
    props.addEvent(newEvent);
    setEventName('');
    setEventDate('');
    setOrganizer('');
  }

  return (
    <form>
      <label htmlFor="eventName">Event Name:</label>
      <input
        id="eventName"
        type="text"
        value={eventName}
        onChange={(event) => setEventName(event.target.value)}
      />
      <label htmlFor="eventDate">Event Date:</label>
      <input
        id="eventDate"
        type="date"
        value={eventDate}
        onChange={(event) => setEventDate(event.target.value)}
      />
      <label htmlFor="organizer">Organizer:</label>
      <input
        id="organizer"
        type="text"
        value={organizer}
        onChange={(event) => setOrganizer(event.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>Add Event</button>
    </form>
  );
}

export default NewEventForm;
