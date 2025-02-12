import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, Moon, Sun, Star, Heart, Book, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen">
      <nav className="glass fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Moon className="w-8 h-8 text-mystic-400" />
              <span className="text-xl font-bold">Mystic Guide</span>
            </Link>

            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link to="/horoscope" className="nav-link">Horoscope</Link>
                <Link to="/readings" className="nav-link">Readings</Link>
                <Link to="/compatibility" className="nav-link">Compatibility</Link>
                <Link to="/predictor" className="nav-link">Life Predictor</Link>
                <Link to="/consultation" className="nav-link">Consultation</Link>
                <Link to="/contact" className="btn-primary">Book Now</Link>
              </div>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/horoscope" className="nav-link block">Horoscope</Link>
              <Link to="/readings" className="nav-link block">Readings</Link>
              <Link to="/compatibility" className="nav-link block">Compatibility</Link>
              <Link to="/predictor" className="nav-link block">Life Predictor</Link>
              <Link to="/consultation" className="nav-link block">Consultation</Link>
              <Link to="/contact" className="btn-primary block text-center mt-4">Book Now</Link>
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-20 pb-16">
        <Outlet />
      </main>

      <footer className="glass mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/horoscope" className="hover:text-mystic-400">Daily Horoscope</Link></li>
                <li><Link to="/compatibility" className="hover:text-mystic-400">Match Making</Link></li>
                <li><Link to="/predictor" className="hover:text-mystic-400">Life Prediction</Link></li>
                <li><Link to="/premium" className="hover:text-mystic-400">Premium Reports</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/readings" className="hover:text-mystic-400">Tarot Reading</Link></li>
                <li><Link to="/numerology" className="hover:text-mystic-400">Numerology</Link></li>
                <li><Link to="/vedic" className="hover:text-mystic-400">Vedic Astrology</Link></li>
                <li><Link to="/palmistry" className="hover:text-mystic-400">Palmistry</Link></li>
                <li><Link to="/muhurtha" className="hover:text-mystic-400">Muhurtha</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: contact@mysticguide.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Celestial Street</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-mystic-400"><MessageCircle /></a>
                <a href="#" className="hover:text-mystic-400"><Star /></a>
                <a href="#" className="hover:text-mystic-400"><Heart /></a>
                <a href="#" className="hover:text-mystic-400"><Book /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p>&copy; 2024 Mystic Guide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;