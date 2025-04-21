import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex justify-between">
        <Link to="/" className="font-bold text-lg">Event Manager</Link>
        <div>
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/add" className="mx-4">Add Event</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
