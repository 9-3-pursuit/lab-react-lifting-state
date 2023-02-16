export default function TextInput({ id, title, newEvent, handleTextChange }) {
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
