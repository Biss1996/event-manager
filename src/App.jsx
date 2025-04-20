import { useState } from 'react';
import './App.css';

const eventsData = [
  {
    id: 1,
    name: 'Drama Festival',
    venue: 'Kasarani',
    date: '2025-06-23',
    status: 'Available',
    image: '/images/music festival.jpg',
  },
  {
    id: 2,
    name: 'Maasai Art Expo',
    date: '2025-06-01',
    venue: 'National Museum',
    status: 'Sold Out',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDe659SziIFbihqghjcMTfDwoc4HBIYiHCg&s',
  },
  {
    id: 3,
    name: 'Tech Conference',
    date: '2025-07-15',
    status: 'Cancelled',
    venue: 'KICC Nairobi',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 4,
    name: 'Food Market',
    date: '2025-05-20',
    status: 'Available',
    venue: 'Vila Rosa Kempinski',
    image: '/images/food.jpg',
  },
  {
    id: 5,
    name: 'Marathon',
    date: '2025-08-05',
    status: 'Sold Out',
    venue: 'Kipchoge Stadium',
    image: '/images/marathon.jpg',
  },
];

const statusStyles = {
  Available: 'text-green-600 bg-green-100',
  'Sold Out': 'text-yellow-700 bg-yellow-100',
  Cancelled: 'text-red-600 bg-red-100',
};

function App() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredEvents = eventsData.filter((event) => {
    const matchesFilter = filter === 'All' || event.status === filter;
    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search events..."
          className="px-4 py-2 border rounded w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded w-full md:w-1/4"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Available">Available</option>
          <option value="Sold Out">Sold Out</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="flex bg-white rounded-xl shadow border overflow-hidden"
          >
            <img
              src={event.image}
              alt={event.name}
              className="w-32 h-32 object-cover"
            />
            <div className="flex-1 p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-500">{event.venue}</p>
              </div>
              <span
                className={`text-sm px-3 py-1 rounded-full font-medium ${
                  statusStyles[event.status] || 'bg-gray-100 text-gray-700'
                }`}
              >
                {event.status}
              </span>
            </div>
          </div>
        ))}
        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-500">No matching events found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
