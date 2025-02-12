import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Car, Plane, Book, Home, Briefcase, Clock, Search, Link } from 'lucide-react';

const Muhurtha = () => {
  const [selectedActivity, setSelectedActivity] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');

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
          Muhurtha Calculator
        </h1>
        <p className="text-xl text-gray-300">
          Find the most auspicious time for your important life events and activities
        </p>
      </motion.div>

      {/* Activity Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { icon: <Car className="w-6 h-6" />, label: "Vehicle Purchase" },
          { icon: <Plane className="w-6 h-6" />, label: "Travel" },
          { icon: <Book className="w-6 h-6" />, label: "Education" },
          { icon: <Home className="w-6 h-6" />, label: "Construction" },
          { icon: <Calendar className="w-6 h-6" />, label: "Marriage" },
          { icon: <Briefcase className="w-6 h-6" />, label: "Business" },
          { icon: <Calendar className="w-6 h-6" />, label: "Ceremonies" },
          { icon: <Clock className="w-6 h-6" />, label: "Other Activities" }
        ].map((activity, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedActivity(activity.label)}
            className={`glass p-4 flex flex-col items-center gap-2 transition-all hover:bg-mystic-800/50
              ${selectedActivity === activity.label ? 'ring-2 ring-mystic-400' : ''}`}
          >
            <div className="text-mystic-400">{activity.icon}</div>
            <span className="text-sm text-center">{activity.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Muhurtha Calculator */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass p-8 md:p-12 max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-2xl font-bold mb-8">Find Auspicious Time</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="activity" className="block mb-2">Activity Type</label>
              <select
                id="activity"
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              >
                <option value="">Select an activity</option>
                <option value="Vehicle Purchase">Vehicle Purchase</option>
                <option value="Travel">Travel</option>
                <option value="Education">Education</option>
                <option value="Construction">Construction</option>
                <option value="Marriage">Marriage</option>
                <option value="Business">Business</option>
                <option value="Ceremonies">Ceremonies</option>
                <option value="Other">Other Activities</option>
              </select>
            </div>
            <div>
              <label htmlFor="preferred-date" className="block mb-2">Preferred Date</label>
              <input
                type="date"
                id="preferred-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Find Auspicious Time
          </button>
        </form>
      </motion.section>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-6"
        >
          <h3 className="text-xl font-semibold mb-4">What is Muhurtha?</h3>
          <p className="text-gray-300">
            Muhurtha is the branch of Vedic astrology that deals with finding the most auspicious time 
            for starting any important activity. It takes into account planetary positions, constellations, 
            and other celestial factors to determine the best time for success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-6"
        >
          <h3 className="text-xl font-semibold mb-4">Why Choose Muhurtha?</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Maximize success probability</li>
            <li>• Avoid inauspicious timings</li>
            <li>• Align with cosmic energies</li>
            <li>• Traditional Vedic wisdom</li>
          </ul>
        </motion.div>
      </div>

      {/* Consultation CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass p-8 text-center mt-16"
      >
        <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
        <p className="text-gray-300 mb-6">
          Consult with our expert astrologers for detailed Muhurtha analysis
        </p>
        <Link to="/consultation" className="btn-primary inline-flex items-center gap-2">
          Book Consultation
          <Calendar className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Muhurtha;
