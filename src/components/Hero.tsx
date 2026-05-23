import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Automate Your Business with AI
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto">
          Discover the best, most affordable AI tools for beginners and small businesses in 2026. Stop working hard, start working smart.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#tools" className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition shadow-lg">
            Explore AI Tools
          </a>
          <a href="#comparison" className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-700 transition">
            View Top 3
          </a>
        </div>
      </div>
    </section>
  );
}
