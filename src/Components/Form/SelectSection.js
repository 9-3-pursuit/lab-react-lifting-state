export default function SelectSection({ setSelectOption }) {
  const handleSelectChange = (e) => setSelectOption(e.target.value);

  return (
    <>
      <label htmlFor="eventType">Event type:</label>
      <select id="eventType" onChange={handleSelectChange}>
        {selectOptions.map(({ id, value }) => (
          <option key={id} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}

const selectOptions = [
  { id: 0, value: "" },
  { id: 1, value: "Birthday" },
  { id: 2, value: "Anniversary" },
  { id: 3, value: "Intramural Sport" },
  { id: 4, value: "Watch Party" },
  { id: 5, value: "Wedding" },
];
