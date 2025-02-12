import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Heart, Briefcase } from 'lucide-react';

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20' },
];

const timeframes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const Horoscope = () => {
  const [selectedSign, setSelectedSign] = React.useState('');
  const [selectedTimeframe, setSelectedTimeframe] = React.useState('Daily');

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mystic-400 to-purple-400 text-transparent bg-clip-text">
          Your Daily Horoscope
        </h1>
        <p className="text-xl text-gray-300">
          Discover what the stars have in store for you
        </p>
      </motion.div>

      {/* Timeframe Selection */}
      <div className="glass p-4 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe}
              onClick={() => setSelectedTimeframe(timeframe)}
              className={`px-6 py-3 rounded-lg transition-colors ${
                selectedTimeframe === timeframe
                  ? 'bg-mystic-600 text-white'
                  : 'glass hover:bg-mystic-800/50'
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </div>

      {/* Zodiac Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {zodiacSigns.map((sign, index) => (
          <motion.div
            key={sign.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass p-6 cursor-pointer transition-all hover:scale-105 ${
              selectedSign === sign.name ? 'ring-2 ring-mystic-400' : ''
            }`}
            onClick={() => setSelectedSign(sign.name)}
          >
            <h3 className="text-2xl font-bold mb-2">{sign.name}</h3>
            <p className="text-gray-300">{sign.dates}</p>
          </motion.div>
        ))}
      </div>

      {/* Horoscope Content */}
      {selectedSign && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass p-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            {selectedSign} - {selectedTimeframe} Horoscope
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Sun className="w-6 h-6 text-mystic-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">General</h3>
                <p className="text-gray-300">
                  The stars align in your favor today. Your natural talents will shine through in unexpected ways, bringing opportunities for growth and success.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-mystic-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Love</h3>
                <p className="text-gray-300">
                  Romance is in the air. Single or attached, you'll find yourself drawn to meaningful connections and deep conversations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-mystic-400 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Career</h3>
                <p className="text-gray-300">
                  Your professional life takes an interesting turn. Stay open to new possibilities and trust your instincts in decision-making.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Horoscope;