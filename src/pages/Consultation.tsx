import React from 'react';
import { motion } from 'framer-motion';
import { Video, Phone, MessageSquare } from 'lucide-react';

const consultationTypes = [
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Video Call',
    description: 'Face-to-face consultation via video call',
    price: '₹1,999',
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Phone Call',
    description: 'Personal consultation over the phone',
    price: '₹1,499',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Chat Session',
    description: 'Text-based consultation for detailed queries',
    price: '₹999',
  },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM',
];

const Consultation = () => {
  const [selectedType, setSelectedType] = React.useState('');
  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedTime, setSelectedTime] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [query, setQuery] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-mystic-400 to-purple-400 text-transparent bg-clip-text">
          Book a Consultation
        </h1>
        <p className="text-xl text-gray-300">
          Get personalized guidance from our expert astrologers
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {consultationTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`glass p-6 cursor-pointer transition-all hover:scale-105 ${
              selectedType === type.title ? 'ring-2 ring-mystic-400' : ''
            }`}
            onClick={() => setSelectedType(type.title)}
          >
            <div className="text-mystic-400 mb-4">{type.icon}</div>
            <h3 className="text-xl font-bold mb-2">{type.title}</h3>
            <p className="text-gray-300 mb-4">{type.description}</p>
            <p className="text-2xl font-bold text-mystic-400">{type.price}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass p-8 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Preferred Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Available Time Slots</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg transition-colors ${
                    selectedTime === time
                      ? 'bg-mystic-600 text-white'
                      : 'glass hover:bg-mystic-800/50'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Your Query</label>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:border-mystic-400 focus:ring-1 focus:ring-mystic-400 min-h-[120px]"
              placeholder="Please describe your concerns or questions..."
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Book Consultation
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="glass p-8 mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: 'How long is each consultation session?',
              answer: 'Each session typically lasts 45-60 minutes, depending on the consultation type and complexity of your questions.'
            },
            {
              question: 'What should I prepare before the consultation?',
              answer: "Please have your birth date, time, and place ready. It is also helpful to prepare specific questions you would like to discuss."
            },
            {
              question: 'Can I reschedule my appointment?',
              answer: 'Yes, you can reschedule up to 24 hours before your scheduled appointment without any additional charge.'
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="glass p-4"
            >
              <h3 className="font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultation;