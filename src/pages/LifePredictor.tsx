import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, Sun, Moon, Sparkles, Heart, Plane, DollarSign } from 'lucide-react';

const LifePredictor = () => {
  const [birthDate, setBirthDate] = React.useState('');
  const [birthTime, setBirthTime] = React.useState('');
  const [birthPlace, setBirthPlace] = React.useState('');
  const [showPrediction, setShowPrediction] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (birthDate && birthTime && birthPlace) {
      setShowPrediction(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mystic-400 to-purple-400 text-transparent bg-clip-text">
          Life Path Predictor
        </h1>
        <p className="text-xl text-gray-300">
          Discover your destiny and life's major milestones
        </p>
      </motion.div>

      <div className="glass p-8 max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2">Birth Date</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Birth Time</label>
            <input
              type="time"
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Birth Place</label>
            <input
              type="text"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              placeholder="Enter city name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Predict My Life Path
          </button>
        </form>
      </div>

      {showPrediction && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          {/* Life Path Number */}
          <div className="glass p-8 text-center">
            <Star className="w-12 h-12 text-mystic-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Your Life Path Number: 7</h2>
            <p className="text-gray-300">
              You are a seeker of truth and wisdom. Your analytical mind and spiritual inclinations guide your path.
            </p>
          </div>

          {/* Timeline Predictions */}
          <div className="glass p-8">
            <h2 className="text-2xl font-bold mb-6">Major Life Events</h2>
            <div className="space-y-6">
              {[
                { year: '2024-2025', event: 'Career Advancement', icon: <Sun /> },
                { year: '2025-2026', event: 'Significant Relationship', icon: <Heart /> },
                { year: '2026-2027', event: 'Travel & Learning', icon: <Plane /> },
                { year: '2027-2028', event: 'Financial Growth', icon: <DollarSign /> },
              ].map((period) => (
                <motion.div
                  key={period.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-4"
                >
                  <div className="text-mystic-400">{period.icon}</div>
                  <div>
                    <h3 className="font-bold">{period.year}</h3>
                    <p className="text-gray-300">{period.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Planetary Influences */}
          <div className="glass p-8">
            <h2 className="text-2xl font-bold mb-6">Planetary Influences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Sun className="w-6 h-6 text-mystic-400" />
                <div>
                  <h3 className="font-bold">Sun in Leo</h3>
                  <p className="text-gray-300">Strong leadership qualities and creative expression</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Moon className="w-6 h-6 text-mystic-400" />
                <div>
                  <h3 className="font-bold">Moon in Pisces</h3>
                  <p className="text-gray-300">Deep emotional intuition and artistic talents</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default LifePredictor;