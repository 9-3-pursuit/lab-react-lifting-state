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
          key={id}
          id={id}
          title={title}
          value={newEvent[id]}
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
