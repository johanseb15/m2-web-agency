import React from "react";

const HeroSection = () => (
  <section className="text-center mb-16">
    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
      Build your website with<br />
      <span className="text-emerald-400">the power of AI.</span>
    </h1>
    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
      Use our intuitive calculator to estimate web development costs and instantly generate landing pages tailored to your needs.
    </p>
    <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
      Get started
    </button>
  </section>
);

export default HeroSection;