import React from 'react';
import { Music2, Users, Music4, Globe2, Mic2, Cloud } from 'lucide-react';

const features = [
  {
    icon: Music4,
    title: 'Real-time Collaboration',
    description: 'Work on tracks simultaneously with musicians from around the world.'
  },
  {
    icon: Music2,
    title: 'Virtual Studio',
    description: 'Professional-grade DAW with VST support, right in your browser.'
  },
  {
    icon: Users,
    title: 'Live Sessions',
    description: 'Host or join live recording sessions with built-in video chat.'
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Automatic cloud backup and version control for your projects.'
  },
  {
    icon: Globe2,
    title: 'Creator Community',
    description: 'Connect with producers, vocalists, and instrumentalists globally.'
  },
  {
    icon: Mic2,
    title: 'Studio Quality',
    description: 'Low-latency recording with professional audio processing.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-indigo-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Studio Features</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need for professional music production, accessible anywhere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-indigo-900/20 rounded-xl hover:bg-indigo-800/30 transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="h-12 w-12 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;