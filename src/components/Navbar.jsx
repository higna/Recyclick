import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/recyclick.png';

const Navbar = () => {
  return (
    <nav className="bg-white-500 p-6">
      <div className="container mx-auto flex items-center justify-center space-x-8 p-2">
        <Link to="/" className="text-black hover:text-gray-300 text-xl font-semibold">Home</Link>
        <Link to="/about" className="text-black hover:text-gray-300 text-xl font-semibold">About</Link>
        <Link to="/"><img src={logo} alt="Logo" className="h-15 w-16" /></Link>
        <Link to="/contact" className="text-black hover:text-gray-300 text-xl font-semibold">Contact</Link>
        <Link to="/register" className="text-black hover:text-gray-300 text-xl font-semibold">Join Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;