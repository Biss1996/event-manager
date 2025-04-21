import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import Home from './components/Home'; // Import the Home component
import Swal from 'sweetalert2';
import "toastify-js/src/toastify.css";

function App() {
  const [events, setEvents] = useState([]);

  // Fetching events from the db.json (json-server)
  useEffect(() => {
    fetch('http://localhost:3000/events')
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch((error) => {
        Swal.fire('Error', 'Failed to load events', 'error');
      });
  }, []);

  // Add new event
  const addEvent = (newEvent) => {
    fetch('http://localhost:3000/events', {
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
      .catch((error) => {
        SweetAlert.fire('Error', 'Failed to add event', 'error');
      });
  };

  // Delete an event
  const deleteEvent = (id) => {
    fetch(`http://localhost:3000/events/${id}`, {
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
      .catch((error) => {
        SweetAlert.fire('Error', 'Failed to delete event', 'error');
      });
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Add Home route */}
          <Route path="/events" element={<EventList events={events} deleteEvent={deleteEvent} />} />
          <Route path="/add" element={<EventForm addEvent={addEvent} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
