import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Sparkles } from 'lucide-react';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const Compatibility = () => {
  const [sign1, setSign1] = React.useState('');
  const [sign2, setSign2] = React.useState('');
  const [showResult, setShowResult] = React.useState(false);

  const handleCheck = () => {
    if (sign1 && sign2) {
      setShowResult(true);
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
          Love Compatibility
        </h1>
        <p className="text-xl text-gray-300">
          Discover your astrological compatibility with your partner
        </p>
      </motion.div>

      <div className="glass p-8 max-w-3xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Person */}
          <div>
            <h3 className="text-xl font-bold mb-4">First Person</h3>
            <select
              value={sign1}
              onChange={(e) => setSign1(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
            >
              <option value="">Select Zodiac Sign</option>
              {zodiacSigns.map((sign) => (
                <option key={sign} value={sign}>{sign}</option>
              ))}
            </select>
          </div>

          {/* Second Person */}
          <div>
            <h3 className="text-xl font-bold mb-4">Second Person</h3>
            <select
              value={sign2}
              onChange={(e) => setSign2(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
            >
              <option value="">Select Zodiac Sign</option>
              {zodiacSigns.map((sign) => (
                <option key={sign} value={sign}>{sign}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleCheck}
          disabled={!sign1 || !sign2}
          className="btn-primary w-full mt-8"
        >
          Check Compatibility
        </button>
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass p-8 max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-2xl font-bold">{sign1}</span>
              <Heart className="w-8 h-8 text-mystic-400" />
              <span className="text-2xl font-bold">{sign2}</span>
            </div>
            <div className="text-3xl font-bold text-mystic-400 mb-2">85% Compatible</div>
            <p className="text-gray-300">Your stars align beautifully!</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Heart className="w-5 h-5 text-mystic-400" />
                Love & Romance
              </h3>
              <p className="text-gray-300">
                Your connection is marked by strong physical and emotional attraction. You both bring out the best in each other.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-mystic-400" />
                Long-term Potential
              </h3>
              <p className="text-gray-300">
                You have excellent potential for a lasting relationship. Your values and life goals align well.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-mystic-400" />
                Day-to-Day Life
              </h3>
              <p className="text-gray-300">
                Your daily routines and habits complement each other well, creating a harmonious living environment.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Compatibility;