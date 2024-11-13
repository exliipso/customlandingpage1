import React from 'react';
import { Waves, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">WaveSync</span>
            </div>
            <p className="text-gray-400">
              Empowering musicians to create together, without boundaries.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Studio</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Resources</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Creators</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Showcase</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-indigo-800/50 text-center text-gray-400">
          <p>© {new Date().getFullYear()} WaveSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;