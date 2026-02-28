import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/08/GCSPS-logo-white.png" alt="Gold Coast Solar Power Solutions Logo" className="h-10 object-contain" />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Home</Link>
            <Link to="/services" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Our Services</Link>
            <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">Contact</Link>
          </div>
          <a href="tel:1300000000" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            Get a Free Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <img src="https://gold-coast-solar-power-solutions.com.au/wp-content/uploads/2018/08/GCSPS-logo-white.png" alt="Logo" className="h-8 object-contain mx-auto mb-6 opacity-50" />
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Gold Coast Solar Power Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
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
