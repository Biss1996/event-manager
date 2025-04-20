import './App.css';

const events = [
  {
    id: 1,
    name: 'Music Festival',
    date: '2025-05-10',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1508973370147-8d7f8d7b9f61?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 2,
    name: 'Art Expo',
    date: '2025-06-01',
    status: 'Sold Out',
    image:
      'https://images.unsplash.com/photo-1533110562239-82bca273e6e2?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 3,
    name: 'Tech Conference',
    date: '2025-07-15',
    status: 'Cancelled',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 4,
    name: 'Food Market',
    date: '2025-05-20',
    status: 'Available',
    image:
      'https://images.unsplash.com/photo-1543332164-6e82f355bad4?auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 5,
    name: 'Marathon',
    date: '2025-08-05',
    status: 'Sold Out',
    image:
      'https://images.unsplash.com/photo-1520975922372-5f24c6f69c47?auto=format&fit=crop&w=600&q=60',
  },
];

const statusStyles = {
  Available: 'text-green-600 bg-green-100',
  'Sold Out': 'text-yellow-700 bg-yellow-100',
  Cancelled: 'text-red-600 bg-red-100',
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {events.map((event) => (
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
      </div>
    </div>
  );
}

export default App;
