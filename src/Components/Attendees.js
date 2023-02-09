import Attendee from "./Attendee";

const Attendees = ({ attendees, updateEventAttendance, event }) => {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee attendee={attendee} event={event} updateEventAttendance={updateEventAttendance} />
      ))}
    </div>
  );
};

export default Attendees;
