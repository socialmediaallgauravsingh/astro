import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Clock, FileText, Download, Shield } from 'lucide-react';

const Premium = () => {
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
          Premium Astrological Report
        </h1>
        <p className="text-xl text-gray-300">
          Unlock a detailed analysis of your life path and cosmic destiny
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Star className="w-6 h-6 text-mystic-400" />,
            title: "Personalized Analysis",
            description: "Detailed insights based on your exact birth time and location"
          },
          {
            icon: <Clock className="w-6 h-6 text-mystic-400" />,
            title: "12-Month Forecast",
            description: "Month-by-month predictions for the year ahead"
          },
          {
            icon: <FileText className="w-6 h-6 text-mystic-400" />,
            title: "40+ Page Report",
            description: "Comprehensive coverage of all life aspects"
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

      {/* Premium Package */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass p-8 md:p-12 max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Premium Report Package</h2>
            <p className="text-gray-300">Complete astrological analysis and future predictions</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400 line-through">₹1,499</div>
            <div className="text-3xl font-bold">₹999</div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {[
            "Detailed Birth Chart Analysis",
            "Career and Professional Life Insights",
            "Love and Relationships Forecast",
            "Financial Prospects and Opportunities",
            "Health and Wellness Guidance",
            "Personal Growth and Life Purpose",
            "PDF & Digital Download Access",
            "30-Day Money Back Guarantee"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-mystic-400 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
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
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Get Your Premium Report
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
          <Shield className="w-4 h-4" />
          <span>Secure payment • Instant digital delivery • 30-day guarantee</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Premium;
