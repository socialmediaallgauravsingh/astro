import React from 'react';
import { motion } from 'framer-motion';
import { Hand, Heart, Brain, Briefcase, Shield, Calendar } from 'lucide-react';

const Palmistry = () => {
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
          Palm Reading
        </h1>
        <p className="text-xl text-gray-300">
          Discover your life's story written in the lines of your palm
        </p>
      </motion.div>

      {/* Reading Types */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Hand className="w-8 h-8 text-mystic-400" />,
            title: "Basic Palm Reading",
            description: "Overview of major lines and mounts",
            price: "₹799",
            duration: "30 minutes"
          },
          {
            icon: <Brain className="w-8 h-8 text-mystic-400" />,
            title: "Detailed Analysis",
            description: "Comprehensive reading of all palm features",
            price: "₹1499",
            duration: "60 minutes"
          },
          {
            icon: <Calendar className="w-8 h-8 text-mystic-400" />,
            title: "Future Predictions",
            description: "Focus on future indicators and timing",
            price: "₹1299",
            duration: "45 minutes"
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
              <div>
                <span className="text-2xl font-bold">{service.price}</span>
                <p className="text-sm text-gray-400">{service.duration}</p>
              </div>
              <button className="btn-primary">Book Now</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* What We Read Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Read</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Heart className="w-6 h-6 text-mystic-400" />,
              title: "Heart Line",
              description: "Insights about emotional life and relationships"
            },
            {
              icon: <Brain className="w-6 h-6 text-mystic-400" />,
              title: "Head Line",
              description: "Mental capabilities and intellectual tendencies"
            },
            {
              icon: <Briefcase className="w-6 h-6 text-mystic-400" />,
              title: "Life Line",
              description: "Vitality, energy levels, and major life changes"
            },
            {
              icon: <Hand className="w-6 h-6 text-mystic-400" />,
              title: "Fate Line",
              description: "Career path and professional success"
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

      {/* Booking Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass p-8 md:p-12 max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <Shield className="w-8 h-8 text-mystic-400" />
          <h2 className="text-2xl font-bold">Book Your Reading</h2>
        </div>
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
          <div>
            <label htmlFor="reading-type" className="block mb-2">Reading Type</label>
            <select
              id="reading-type"
              className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
              required
            >
              <option value="">Select a reading type</option>
              <option value="basic">Basic Palm Reading (30 mins)</option>
              <option value="detailed">Detailed Analysis (60 mins)</option>
              <option value="future">Future Predictions (45 mins)</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Special Requests</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
            ></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">Schedule Reading</button>
        </form>
      </motion.section>
    </div>
  );
};

export default Palmistry;
