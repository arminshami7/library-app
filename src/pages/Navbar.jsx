

import { Link } from 'react-router-dom';

function Navbar() {
  return (
   <nav className="bg-linear-to-r from-blue-50 to-indigo-50 border-b border-blue-200 flex items-center justify-between px-8 py-4 mb-8 rounded-b-xl shadow-md">
      <div className="flex items-center gap-3">
        <Link to="/" className="text-blue-800 font-bold text-xl tracking-tight">📚 Library App</Link>
      </div>
      <div className="flex gap-6 items-center">
        <Link to="/" className=" text-blue-800 hover:text-blue-600 ">Home</Link>
        <Link to="/about" className=" text-blue-800 hover:text-blue-600 ">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
