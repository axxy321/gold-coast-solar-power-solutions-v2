import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Search } from 'lucide-react';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/08/GCSPS-logo-white.png" alt="Gold Coast Solar Power Solutions Logo" className="h-10 object-contain" />
          </Link>
          <div className="hidden xl:flex items-center space-x-8">
            <Link to="/" className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Home</Link>
            <Link to="/about" className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">About Us</Link>
            <Link to="/services" className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Residential</Link>
            <Link to="/services" className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Batteries</Link>
            <Link to="/services" className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Service</Link>
            <Link to="/services" className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Products</Link>
            <Link to="/contact" className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider">Contact Us</Link>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-slate-300 hover:text-amber-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <motion.a
              href="tel:1300000000"
              animate={{
                boxShadow: ["0px 0px 0px rgba(245,158,11,0.2)", "0px 0px 20px rgba(245,158,11,0.6)", "0px 0px 0px rgba(245,158,11,0.2)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-slate-950 bg-amber-500 rounded-full"
            >
              Get a Free Quote
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 mt-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <img src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/08/GCSPS-logo-white.png" alt="Logo" className="h-10 object-contain" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Powering the Gold Coast with premium tier-1 solar panel and battery installations for over 15 years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:1300000000" className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  <Phone className="w-5 h-5 text-amber-500" />
                  1300 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@goldcoastsolarpowersolutions.com.au" className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  <Mail className="w-5 h-5 text-amber-500" />
                  info@gcsps.com.au
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                Unit 2/13 Brendan Dr, Nerang QLD 4211
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Residential Solar</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Commercial Solar</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">Solar Batteries</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Gold Coast Solar Power Solutions. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-amber-500/30 selection:text-amber-500 text-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
