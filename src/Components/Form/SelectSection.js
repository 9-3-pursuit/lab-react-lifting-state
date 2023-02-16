export default function SelectSection({ setSelectOption }) {
  const handleSelectChange = (e) => setSelectOption(e.target.value);

  return (
    <>
      <label htmlFor="eventType">Event type:</label>
      <select id="eventType" onChange={handleSelectChange}>
        {selectOptions.map(({ value }) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </>
  );
}

const selectOptions = [
  { value: "" },
  { value: "Birthday" },
  { value: "Anniversary" },
  { value: "Intramural Sport" },
  { value: "Watch Party" },
  { value: "Wedding" },
];
