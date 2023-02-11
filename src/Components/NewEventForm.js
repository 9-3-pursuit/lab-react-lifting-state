

export default function NewEventForm(props) {

  //
  //  props= { setNewEvent: setNewEvent }
  //
  //

  function resetEventForm() {
    props.setNewEvent({
      id: "",
      eventType: "",
      name: "",
      organizer: "",
      eventImage: "",
      date: "",
    });
    props.setSelectOption("");
  }

  function handleSelectChange(e) {
    props.setSelectOption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addEvent();
    resetEventForm();
  }

  function handleTextChange(e) {
    props.setNewEvent({
      ...props.newEvent,
      [e.target.id]: e.target.value,
    });
  }


  return (
    <div className="new-event">
          <>
            <form onSubmit={handleSubmit}>
              <h3>Create a new event</h3>
              <label htmlFor="name">Event name:</label>
              <input
                type="text"
                id="name"
                onChange={handleTextChange}
                value={props.newEvent.name}
              />

              <label htmlFor="organizer">Organizer:</label>
              <input
                type="text"
                id="organizer"
                onChange={handleTextChange}
                value={props.newEvent.organizer}
              />

              <label htmlFor="eventImage">Event image:</label>
              <input
                type="text"
                id="eventImage"
                onChange={handleTextChange}
                value={props.newEvent.eventImage}
              />
              <label htmlFor="eventType">Event type:</label>
              <select id="eventType" onChange={handleSelectChange}>
                <option value=""></option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Intramural Sport">Intramural Sport</option>
                <option value="Watch Party">Watch Party</option>
                <option value="wedding">Wedding</option>
              </select>
              <br />
              <input type="submit" />
            </form>
          </>
        </div>
  );
}
