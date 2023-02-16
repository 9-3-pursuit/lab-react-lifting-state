import { useContext } from "react";
import { eventsContext } from "../../Data/eventsContext";
import Event from "./Event";

export default function EventList() {
  const events = useContext(eventsContext);

  return (
    <>
      <ul className="events">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </ul>
    </>
  );
}
