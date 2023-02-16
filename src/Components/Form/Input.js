export default function Input({ id, title, newEvent, setNewEvent }) {
  function handleTextChange(e) {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  }
  console.log(id + " " + newEvent[id]);
  return (
    <>
      <label htmlFor={id}>{title}:</label>
      <input
        type="text"
        id={id}
        onChange={handleTextChange}
        value={newEvent[id]}
      />
    </>
  );
}
