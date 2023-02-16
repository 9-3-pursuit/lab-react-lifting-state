import { v1 as generateUniqueID } from "uuid";
import TextInput from "./TextInput";

export default function TextInputSection({ newEvent, setNewEvent }) {
  function handleTextChange(e) {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <>
      {inputs.map(({ id, title }) => (
        <TextInput
          key={generateUniqueID()}
          id={id}
          title={title}
          newEvent={newEvent}
          handleTextChange={handleTextChange}
        />
      ))}
    </>
  );
}

const inputs = [
  { id: "name", title: "Event name" },
  { id: "organizer", title: "Organizer" },
  { id: "eventImage", title: "Event Image" },
];
