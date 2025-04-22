import { useState } from 'react';

function EventForm({ addEvent }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('Available');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { name, date, venue, image, status };
    addEvent(newEvent);
    setName('');
    setDate('');
    setVenue('');
    setImage('');
    setStatus('Available');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-500 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add Event</h2>
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="Available">Available</option>
        <option value="Sold Out">Sold Out</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Event</button>
    </form>
  );
}

export default EventForm;
