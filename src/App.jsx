import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import Home from './components/Home';
import Swal from 'sweetalert2';
import Toast from 'toastify-js';
import "toastify-js/src/toastify.css";
import EventCard from './components/EventCard';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(() => {
        Swal.fire('Error', 'Failed to load events', 'error');
      });
  }, []);

  const addEvent = (newEvent) => {
    fetch('http://localhost:3001/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    })
      .then(res => res.json())
      .then(data => {
        setEvents([...events, data]);
        Toast({
          text: "Event added successfully!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#4CAF50",
          stopOnFocus: true,
        }).showToast();
      })
      .catch(() => {
        Swal.fire('Error', 'Failed to add event', 'error');
      });
  };

  const deleteEvent = (id) => {
    fetch(`http://localhost:3001/events/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setEvents(events.filter(event => event.id !== id));
        Toast({
          text: "Event deleted successfully!",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#f44336",
          stopOnFocus: true,
        }).showToast();
      })
      .catch(() => {
        Swal.fire('Error', 'Failed to delete event', 'error');
      });
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home events={events} deleteEvent={deleteEvent} />} />
          <Route path="/events/:eventId" element={<EventCard events={events} deleteEvent={deleteEvent} />} />
          <Route path="/add" element={<EventForm addEvent={addEvent} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
