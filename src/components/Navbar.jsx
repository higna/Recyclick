import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/recyclick.png';

const Navbar = () => {
  return (
    <nav className="bg-white-500 p-5">
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <Link to="/" className="text-black hover:text-gray-300 text-xl font-semibold">Home</Link>
        <Link to="/about" className="text-black hover:text-gray-300 text-xl font-semibold">About</Link>
        <img src={logo} alt="Logo" className="h-15 w-16" />
        <Link to="/contact" className="text-black hover:text-gray-300 text-xl font-semibold">Contact</Link>
        <Link to="/register" className="text-black hover:text-gray-300 text-xl font-semibold">Join Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;