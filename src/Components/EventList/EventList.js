import { useContext } from "react";
import { eventsContext } from "../../Data/eventsContext";
import EventItem from "./EventItem";

export default function EventList() {
  const events = useContext(eventsContext);

  return (
    <>
      <ul className="events">
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </>
  );
}
