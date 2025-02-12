import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Sun, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

import astroImg from '../images/astro-img.png';



const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-20" />
        {/* Updated rotating astrology wheel */}
        <motion.img
          src={astroImg}
          alt="Astrology Wheel"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] opacity-20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-mystic-400 to-purple-400 text-transparent bg-clip-text">
              Discover Your Celestial Path
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Unlock the secrets written in the stars and navigate your destiny with our expert astrologers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation" className="btn-primary">
                Book Consultation
              </Link>
              <Link to="/horoscope" className="px-6 py-3 glass hover:bg-mystic-800/50 rounded-lg transition-colors">
                Daily Horoscope
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-mystic-400" />,
                title: "Personal Readings",
                description: "Get detailed insights about your life path, relationships, and career through personalized astrological readings."
              },
              {
                icon: <Moon className="w-8 h-8 text-mystic-400" />,
                title: "Match Making",
                description: "Find your perfect match with our comprehensive compatibility analysis based on vedic astrology."
              },
              {
                icon: <Sun className="w-8 h-8 text-mystic-400" />,
                title: "Life Prediction",
                description: "Discover what the future holds with our accurate life predictions and guidance for major life events."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-6"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Report Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
              <Sparkles className="w-64 h-64 text-mystic-400 opacity-20" />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Astrological Report</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a comprehensive analysis of your life path, relationships, career, and more with our detailed premium report.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold">₹999</span>
                <Link to="/premium" className="btn-primary">
                  Get Your Report
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
              <MessageCircle className="w-64 h-64 text-mystic-400 opacity-20" />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI-Powered Astrology Chat
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get instant astrological insights from our AI assistant. Ask questions about your zodiac, planetary positions, or general life guidance.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/chat" className="btn-primary">
                  Chat Now
                </Link>
                <span className="text-gray-300">Available 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;