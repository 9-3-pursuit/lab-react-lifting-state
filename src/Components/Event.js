export default function Event({
  event,
  attendees,
  updateEventAttendance,
  setShowAttendees,
  showAttendees }) {
  // const [showAttendees, setShowAttendees] = useState(false); // * sets what attendees will show in relation to user clicks
  function toggleEventAttendees() { // * switches b/t attendee information upon user click; moved from app.js
    setShowAttendees(!showAttendees);
  }

  return (
    // * Events section of HTML
    <li key={event.id}>
      <img src={event.eventImage} alt={event.name} />
      <h5>
        {event.name} {event.eventType}
      </h5>
      <br />
      <span>Organized by: {event.organizer} </span>
      <br />
      <>
        <button onClick={toggleEventAttendees}>
          {!showAttendees ? "Show Attendees" : "Hide Attendees"}
        </button>

        {showAttendees ? (
          <div className="attendees">
            {/* Attendes.js file info goes here */}
            {attendees.map((attendee, index) => (
              <>
                <div key={attendee.id} className="attendee">
                  <p>
                    <img
                      src={attendee.avatar}
                      alt={attendee.firstName}
                    />
                    {"   "}
                    <span>
                      {" "}
                      {attendee.firstName} {attendee.lastName}{" "}
                    </span>
                  </p>
                  <p>
                    <button
                      className="clickable"
                      onClick={() =>
                        updateEventAttendance(
                          event.id,
                          attendee.id
                        )
                      }
                    >
                      Attending:
                    </button>
                    <span>
                      {attendee.attendance ? "✅" : "❌"}
                    </span>
                  </p>

                  <p>
                    <span>Note:</span> {attendee.note}
                  </p>
                </div>
              </>
            ))}
          </div>
        ) : null}
      </>
    </li>


  )

}
