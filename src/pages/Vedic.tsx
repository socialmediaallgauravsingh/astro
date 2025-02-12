import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Star, Compass, Clock, ScrollText, Shield } from 'lucide-react';

const Vedic = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mystic-400 to-purple-400 text-transparent bg-clip-text">
          Vedic Astrology
        </h1>
        <p className="text-xl text-gray-300">
          Ancient wisdom for modern life guidance through traditional Vedic astrology
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <ScrollText className="w-8 h-8 text-mystic-400" />,
            title: "Birth Chart Analysis",
            description: "Detailed analysis of your Vedic birth chart (Kundli)",
            price: "₹1499"
          },
          {
            icon: <Compass className="w-8 h-8 text-mystic-400" />,
            title: "Dasha Predictions",
            description: "Understanding your planetary periods and transitions",
            price: "₹1299"
          },
          {
            icon: <Star className="w-8 h-8 text-mystic-400" />,
            title: "Remedial Solutions",
            description: "Personalized remedies based on planetary positions",
            price: "₹999"
          }
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">{service.price}</span>
              <button className="btn-primary">Book Now</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Analyze</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Sun className="w-6 h-6 text-mystic-400" />,
              title: "Planetary Positions",
              description: "Analysis of all nine planets in your birth chart"
            },
            {
              icon: <Moon className="w-6 h-6 text-mystic-400" />,
              title: "House Analysis",
              description: "Detailed study of all 12 houses in your chart"
            },
            {
              icon: <Star className="w-6 h-6 text-mystic-400" />,
              title: "Nakshatras",
              description: "Impact of lunar constellations on your life"
            },
            {
              icon: <Clock className="w-6 h-6 text-mystic-400" />,
              title: "Transit Predictions",
              description: "Future predictions based on planetary movements"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation Form */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass p-8 md:p-12 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-8">Schedule a Consultation</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="birthdate" className="block mb-2">Birth Date</label>
              <input
                type="date"
                id="birthdate"
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              />
            </div>
            <div>
              <label htmlFor="birthtime" className="block mb-2">Birth Time</label>
              <input
                type="time"
                id="birthtime"
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="birthplace" className="block mb-2">Birth Place</label>
            <input
              type="text"
              id="birthplace"
              className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
              placeholder="City, Country"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">Book Consultation</button>
        </form>
      </motion.section>
    </div>
  );
};

export default Vedic;
