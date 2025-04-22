import EventList from './EventList';

function Home({ events, deleteEvent }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Event Manager</h1>
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
}

export default Home;
