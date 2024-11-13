import React from 'react';
import { Waves, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-indigo-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold">WaveSync</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#studio" className="hover:text-purple-400 transition-colors">Studio</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-6 py-2 rounded-full transition-all duration-300">
              Start Creating
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#studio" className="hover:text-purple-400 transition-colors">Studio</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 px-6 py-2 rounded-full transition-all duration-300">
                Start Creating
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;