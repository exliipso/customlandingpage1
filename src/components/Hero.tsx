import React from 'react';
import { Waves, Play, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 animate-pulse bg-purple-500 rounded-full blur-xl opacity-30"></div>
          <Waves className="h-16 w-16 text-purple-400 relative z-10 animate-float" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
          Create Music Together, Anywhere
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Real-time collaborative music production studio in your browser. 
          Connect, create, and produce with musicians worldwide.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="group bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2">
            <span>Launch Studio</span>
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-8 py-4 rounded-full text-lg font-semibold border border-purple-500/30 hover:border-purple-500 transition-colors flex items-center space-x-2">
            <Music className="w-5 h-5" />
            <span>Watch Demo</span>
          </button>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="WaveSync Studio Interface"
            className="rounded-lg shadow-2xl mx-auto max-w-4xl w-full relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;