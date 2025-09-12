import React from 'react';

export default function Hero() {
  return (
    <div className="pt-[5px]">
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
    
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80"
          alt="Bar background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-[70px] text-teal-400 font-extrabold drop-shadow-lg leading-tight">
            Welcome to <span className="text-yellow-400">Happy Hour</span>
          </h1>
          <p className="text-[30px] md:text-4xl text-gray-200 mb-8 drop-shadow-md">
            Your neighborhood hangout for great food and unforgettable vibes.
          </p>
          <a
            href="#menu"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-2xl hover:bg-yellow-300 transition"
          >
            View Menu
          </a>
        </div>
      </section>
    </div>
  );
}