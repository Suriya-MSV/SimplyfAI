import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-purple-100 shadow-md p-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold text-purple-800 cursor-pointer"
        onClick={() => navigate('/')}
      >
        SimplyfAI
      </h1>
      <div className="flex gap-6">
        <button
          onClick={() => navigate('/')}
          className="text-purple-900 hover:text-purple-600 transition duration-300"
        >
          Home
        </button>
        <button
          onClick={() => navigate('/about')}
          className="text-purple-900 hover:text-purple-600 transition duration-300"
        >
          About
        </button>
        <button
          onClick={() => navigate('/contact')}
          className="text-purple-900 hover:text-purple-600 transition duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
