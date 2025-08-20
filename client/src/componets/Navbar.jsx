import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-purple-100 shadow-md p-4 flex justify-between items-center">
      <h1
        className="text-2xl font-bold text-purple-800 cursor-pointer"
        onClick={() => window.location.href = '/'}
      >
        SimplyfAI
      </h1>
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 transition duration-300"
              : "text-purple-900 hover:text-purple-600 transition duration-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 transition duration-300"
              : "text-purple-900 hover:text-purple-600 transition duration-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 transition duration-300"
              : "text-purple-900 hover:text-purple-600 transition duration-300"
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

