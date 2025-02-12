import React from 'react';
import { motion } from 'framer-motion';
import { Hash, Heart, Briefcase, Star, Brain, Compass, Calculator } from 'lucide-react';

const Numerology = () => {
  const [name, setName] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');

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
          Numerology Reading
        </h1>
        <p className="text-xl text-gray-300">
          Discover the hidden meanings in your numbers and unlock your life's potential
        </p>
      </motion.div>

      {/* Calculator Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="glass p-8 md:p-12 max-w-3xl mx-auto mb-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <Calculator className="w-8 h-8 text-mystic-400" />
          <h2 className="text-2xl font-bold">Calculate Your Numbers</h2>
        </div>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Full Name (as per birth certificate)</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
              required
            />
          </div>
          <div>
            <label htmlFor="birthdate" className="block mb-2">Date of Birth</label>
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full p-3 bg-mystic-900/50 rounded-lg focus:ring-2 focus:ring-mystic-400"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Calculate Your Numbers
          </button>
        </form>
      </motion.div>

      {/* Number Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: <Hash className="w-6 h-6 text-mystic-400" />,
            title: "Life Path Number",
            description: "Your core number that reveals your life's purpose and journey"
          },
          {
            icon: <Heart className="w-6 h-6 text-mystic-400" />,
            title: "Heart's Desire Number",
            description: "Reveals your inner cravings, desires, and motivations"
          },
          {
            icon: <Brain className="w-6 h-6 text-mystic-400" />,
            title: "Personality Number",
            description: "Shows how others perceive you and your outer personality"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Numerology Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Compass className="w-8 h-8 text-mystic-400" />,
              title: "Personal Year Forecast",
              description: "Understand the energies and opportunities coming your way in the current year",
              price: "₹499"
            },
            {
              icon: <Briefcase className="w-8 h-8 text-mystic-400" />,
              title: "Career Numerology",
              description: "Get insights about your career path and professional opportunities",
              price: "₹699"
            },
            {
              icon: <Heart className="w-8 h-8 text-mystic-400" />,
              title: "Relationship Compatibility",
              description: "Analyze your compatibility with partners, friends, or colleagues",
              price: "₹599"
            },
            {
              icon: <Star className="w-8 h-8 text-mystic-400" />,
              title: "Complete Life Analysis",
              description: "Comprehensive numerological analysis of all life aspects",
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
      </section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="glass p-8 md:p-12"
      >
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: "What is Numerology?",
              answer: "Numerology is the study of numbers in your life and how they affect your personality, life path, and future. It's based on the principle that everything in the universe vibrates at its own frequency."
            },
            {
              question: "How is my Life Path Number calculated?",
              answer: "Your Life Path Number is calculated by reducing your birth date to a single digit. For example, if you were born on 15/07/1990, you would add 1+5+0+7+1+9+9+0 = 32, then 3+2 = 5."
            },
            {
              question: "How accurate is Numerology?",
              answer: "Numerology provides insights into personality traits and life patterns. While it shouldn't be the only factor in making life decisions, many find it to be a helpful tool for self-discovery and understanding."
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Numerology;
