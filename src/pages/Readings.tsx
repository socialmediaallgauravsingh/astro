import React from 'react';
import { motion } from 'framer-motion';
import { Car as Cards, HandMetal, Book, Sparkles, Clock, Users } from 'lucide-react';

const services = [
  {
    icon: <Cards className="w-12 h-12" />,
    title: 'Tarot Reading',
    description: 'Gain insights into your past, present, and future through the ancient wisdom of tarot cards.',
    price: '₹1,499',
    duration: '45 minutes',
  },
  {
    icon: <HandMetal className="w-12 h-12" />,
    title: 'Palmistry',
    description: 'Discover your life path, relationships, and potential through the art of palm reading.',
    price: '₹1,299',
    duration: '30 minutes',
  },
  {
    icon: <Book className="w-12 h-12" />,
    title: 'Vedic Astrology',
    description: 'Get detailed insights based on your birth chart and planetary positions.',
    price: '₹1,999',
    duration: '60 minutes',
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: 'Crystal Reading',
    description: 'Connect with the healing energies of crystals for guidance and clarity.',
    price: '₹1,199',
    duration: '30 minutes',
  },
];

const Readings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mystic-400 to-purple-400 text-transparent bg-clip-text">
          Spiritual Readings
        </h1>
        <p className="text-xl text-gray-300">
          Choose your path to enlightenment with our expert readers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8"
          >
            <div className="text-mystic-400 mb-6">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-300 mb-6">{service.description}</p>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-mystic-400" />
                <span>{service.duration}</span>
              </div>
              <div className="text-2xl font-bold text-mystic-400">
                {service.price}
              </div>
            </div>
            <button className="btn-primary w-full">Book Session</button>
          </motion.div>
        ))}
      </div>

      {/* Reader Profiles */}
      <div className="glass p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Expert Readers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((reader) => (
            <motion.div
              key={reader}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-mystic-400 to-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reader Name</h3>
              <p className="text-gray-300 mb-4">Specializes in Tarot & Palmistry</p>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 glass text-sm">10+ Years</span>
                <span className="px-3 py-1 glass text-sm">⭐ 4.9</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="glass p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((testimonial) => (
            <motion.div
              key={testimonial}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="glass p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mystic-400 to-purple-600" />
                <div>
                  <h3 className="font-bold">Client Name</h3>
                  <div className="text-mystic-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="text-gray-300">
                "The reading was incredibly accurate and insightful. It helped me gain clarity about my path and make important decisions."
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Readings;