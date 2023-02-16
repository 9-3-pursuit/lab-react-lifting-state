export default function SingleAttendee({ attendee, children }) {
  return (
    <>
      <div key={attendee.id} className="attendee">
        <p>
          <img src={attendee.avatar} alt={attendee.firstName} />
          {"   "}
          <span>
            {" "}
            {attendee.firstName} {attendee.lastName}{" "}
          </span>
        </p>
        {children}
        <p>
          <span>Note:</span> {attendee.note}
        </p>
      </div>
    </>
  );
}
