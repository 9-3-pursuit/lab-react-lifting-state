function EventList(props) {
    
    const events = props.events || [];
  
    return (
      <div>
        {events.map((event) => (
          <EventList key={event.id} event={event} />
        ))}
      </div>
    );
  }
  