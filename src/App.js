import { useState } from "react";
import eventsData from "./data";
import { v1 as generateUniqueID } from "uuid";
import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);
  const [selectedEventType, setSelectedEventType] = useState("");
  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  function handleEventTypeChange(event) {
    setSelectedEventType(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const createdEvent = {
      id: generateUniqueID(),
      eventType: selectedEventType,
      name: newEvent.name,
      organizer: newEvent.organizer,
      eventImage: newEvent.eventImage || "https://loremflickr.com/640/480/",
      date: newEvent.date,
      people: [],
    };

    setEvents((prevEvents) => [createdEvent, ...prevEvents]);
    resetNewEvent();
  }

  function handleNewEventInputChange(event) {
    const { id, value } = event.target;
    setNewEvent((prevNewEvent) => ({
      ...prevNewEvent,
      [id]: value,
    }));
  }

  function resetNewEvent() {
    setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
      people: [],
    });
    setSelectedEventType("");
  }

  function updateEventAttendance(eventId, attendeeId) {
    setEvents((prevEvents) =>
      prevEvents.map((event) => {
        if (event.id === eventId) {
          const updatedAttendees = event.people.map((attendee) => {
            if (attendee.id === attendeeId) {
              return {
                ...attendee,
                attendance: !attendee.attendance,
              };
            }
            return attendee;
          });
          return { ...event, people: updatedAttendees };
        }
        return event;
      })
    );
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="new-event">
          <NewEventForm
            handleSubmit={handleSubmit}
            handleNewEventInputChange={handleNewEventInputChange}
            handleEventTypeChange={handleEventTypeChange}
            selectedEventType={selectedEventType}
            newEvent={newEvent}
          />
        </div>
        <div className="events">
          <ul>
            {events.map((event) => (
              <Event
                key={event.id}
                attendees={event.people}
                event={event}
                updateEventAttendance={updateEventAttendance}
              />
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
