import Attendee from "./Components/Attendee"

export default function Attendees({
  attendees,
  event,
  updateEventAttendance }) {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <>
          {/* Attendee.js file info here */}
          <Attendee
            attendee={attendee}
            event={event}
            index={index}
            updateEventAttendance={updateEventAttendance} />
          {/* <div key={attendee.id} className="attendee">
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
        </div> */}
        </>
      ))}
    </div>
  )
}
