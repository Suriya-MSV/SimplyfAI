import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/search');
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)] bg-purple-100">
      <div className="md:w-[50%] md:h-[70%] flex items-center flex-col gap-10 w-[90%] h-auto p-10 bg-purple-200 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-purple-800 tracking-wide text-center">
          Hi, Welcome to SimplyfAI
        </h1>
        <p className="text-purple-900 text-justify md:text-lg text-md leading-relaxed px-4">
          The Answer Engine is designed to provide simple, clear responses to any question, ensuring that everyone can understand. It breaks down complex topics into easy-to-follow explanations. The engine is user-friendly and avoids unnecessary jargon or complicated language, making learning fun and engaging.
        </p>
        <button
          onClick={handleStartClick}
          type="button"
          className="flex items-center justify-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 px-6 py-3 rounded-full shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring focus:ring-purple-300"
        >
          Let's Start
          <svg
            className="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Home;
