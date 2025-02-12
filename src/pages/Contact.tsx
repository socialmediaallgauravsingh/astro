import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-300">Schedule your personal consultation with our expert astrologers</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-6 md:p-8"
        >
          <form className="space-y-6">
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
            <div>
              <label htmlFor="service" className="block mb-2">Service Type</label>
              <select
                id="service"
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              >
                <option value="">Select a service</option>
                <option value="tarot">Tarot Reading</option>
                <option value="astrology">Vedic Astrology</option>
                <option value="numerology">Numerology</option>
                <option value="palmistry">Palmistry</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="glass p-6">
            <div className="flex items-center gap-4 mb-4">
              <Phone className="w-6 h-6 text-mystic-400" />
              <h3 className="text-xl font-semibold">Phone</h3>
            </div>
            <p>+1 (555) 123-4567</p>
          </div>

          <div className="glass p-6">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-6 h-6 text-mystic-400" />
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <p>contact@mysticguide.com</p>
          </div>

          <div className="glass p-6">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-6 h-6 text-mystic-400" />
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p>123 Celestial Street<br />Mystic City, MC 12345</p>
          </div>

          <div className="glass p-6">
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-6 h-6 text-mystic-400" />
              <h3 className="text-xl font-semibold">Business Hours</h3>
            </div>
            <p>Monday - Friday: 9:00 AM - 8:00 PM<br />Saturday: 10:00 AM - 6:00 PM</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
