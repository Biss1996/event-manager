import EventCard from './EventCard';

function EventList({ events, deleteEvent }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map(event => (
        <EventCard key={event.id} event={event} deleteEvent={deleteEvent} />
      ))}
    </div>
  );
}

export default EventList;
