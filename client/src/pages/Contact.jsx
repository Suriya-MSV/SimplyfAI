import React from 'react';

const Contact = () => {
  return (
    <div className="w-full mt-20 bg-purple-100 flex flex-col justify-center items-center min-h-[70vh]">
      <div className="md:w-[50%] w-[90%] p-10 bg-purple-200 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-purple-800 tracking-wide text-center mb-6">
          Contact
        </h1>
        <p className="text-purple-900 text-lg mb-4">
          Feel free to reach out through any of the following channels:
        </p>
        <ul className="text-purple-900 text-md leading-loose">
          <li>
            <strong>Email:</strong> suriyavelmariappan@gmail.com
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/Suriya-MSV"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline"
            >
            github.com/Suriya-MSV
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/suriyavel-mariappan-211363277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline"
            >
              linkedin.com/in/suriyavel-mariappan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
