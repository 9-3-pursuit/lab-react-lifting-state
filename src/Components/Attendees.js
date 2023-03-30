import Attendee from "./Attendee";

export default function Attendees({ attendees, updateEventAttendance, event }) {
  return (
    <div className="attendees">
      {attendees.map((attendee) => (
        <Attendee
          key={attendee.id}
          attendee={attendee}
          event={event}
          updateEventAttendance={updateEventAttendance}
        />
      ))}
    </div>
  );
}
