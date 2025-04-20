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
                <h2 className="text-xl text-gray-800 font-semibold">{event.name}</h2>
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
          <div
            id="toast-danger"
            className="flex items-center w-full max-w-xs p-4 mx-auto mt-4 text-gray-500 bg-white rounded-lg shadow-sm"
            role="alert"
          >
            <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
            </div>
            <div className="ms-3 text-sm font-normal">No matching events found.</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
              onClick={() => setSearch('')}
              aria-label="Close"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
