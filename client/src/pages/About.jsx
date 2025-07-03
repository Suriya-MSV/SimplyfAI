import React from 'react';

const About = () => {
  return (
    <div className="w-full mt-20 bg-purple-100">
      <div className="flex justify-center items-center">
        <div className="md:w-[50%] w-[90%] p-10 bg-purple-200 rounded-3xl shadow-xl transform transition duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-6">
            About SimplyfAI
          </h1>
          <p className="text-purple-900 text-justify md:text-lg text-md leading-relaxed">
            SimplyfAI helps people who cannot read or write English well. You can ask anything in simple words. Unschooled will give you easy answers. No big words. No difficult grammar. Just help — step by step. You do not need to know much English. You do not need to type perfectly. Just try. Unschooled understands you. It is made for you. It is like a kind friend. It explains slowly and clearly. You can ask about anything — work, school, health, stories, or news. It is free to use. No ads. No tricks. Just learning. I made this so everyone can learn — even if reading is hard. You are smart. You can learn. Unschooled is here for you. Thank you for using it. Let us learn together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
