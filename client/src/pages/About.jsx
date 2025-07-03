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
            SimplifAI is a smart and friendly website made especially for kids who are full of questions! We know that children are naturally curious — always asking why, how, and what if. But sometimes, the answers they find are too hard to understand. That’s where SimplifAI comes in! SimplifAI is a special website powered by Artificial Intelligence (AI) that gives easy-to-understand answers to your questions. It’s like talking to a helpful robot teacher who explains things in a way kids can truly understand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
