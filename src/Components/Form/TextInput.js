export default function TextInput({ id, title, value, handleTextChange }) {
  return (
    <>
      <label htmlFor={id}>{title}:</label>
      <input type="text" id={id} onChange={handleTextChange} value={value} />
    </>
  );
}
