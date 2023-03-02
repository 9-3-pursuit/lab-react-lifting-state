import React, { useState } from 'react';
import Header from './Components/Header';
import NewEventForm from './Components/NewEventForm';
import Event from './Components/Event';
import Footer from './Components/Footer';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const toggleAttendance = (eventId, attendeeIndex) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        const updatedAttendees = event.attendees.map((attendee, index) => {
          if (index === attendeeIndex) {
            return { ...attendee, attending: !attendee.attending };
          } else {
            return attendee;
          }
        });
        return { ...event, attendees: updatedAttendees };
      } else {
        return event;
      }
    });
    setEvents(updatedEvents);
  };

  const toggleAttendeesView = (eventId) => {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return { ...event, showAttendees: !event.showAttendees };
      } else {
        return { ...event, showAttendees: false };
      }
    });
    setEvents(updatedEvents);
  };

  return (
    <div className="App">
      <Header />
      <NewEventForm addEvent={addEvent} />
      <main>
        <h5>Upcoming Events:</h5>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <Event
                event={event}
                toggleAttendance={toggleAttendance}
                toggleAttendeesView={toggleAttendeesView}
              />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
