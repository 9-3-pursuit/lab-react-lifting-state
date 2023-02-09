import Attendee from "./Attendee";

export default function Attendees({ attendees, event, UpdateEventAttendance}) {
  return(
    <div className="attendees">
       {attendees.map((attendee, index) => (
        <Attendee
        UpdateEventAttendance = {UpdateEventAttendance}
        event = {event}
        attendee = {attendee}
        />
       ))}
       </div>
  );
}
