import { eventsContext, setEventsContext } from "../Data/eventsContext";
import { useState } from "react";
import eventsData from "../Data/data";

export default function ContextProvider({ children }) {
  const [events, setEvents] = useState(eventsData);

  return (
    <>
      <eventsContext.Provider value={events}>
        <setEventsContext.Provider value={setEvents}>
          {children}
        </setEventsContext.Provider>
      </eventsContext.Provider>
    </>
  );
}
