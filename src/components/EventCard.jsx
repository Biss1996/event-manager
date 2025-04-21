function EventCard({ event, deleteEvent }) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={event.image} alt={event.name} className="w-full h-32 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.venue}</p>
          <div className="flex justify-between mt-4">
            <span className={`text-sm px-3 py-1 rounded-full ${event.status === 'Available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {event.status}
            </span>
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => deleteEvent(event.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default EventCard;
  