import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Fingerprint, ScanEye, Zap } from 'lucide-react';
import Login from './Login';
import Register from './Register';

function LandingPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#1a3edb] overflow-hidden">
      {/* Search/Left White Section */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-[35%] bg-white rounded-r-[100px] lg:rounded-r-[150px] p-12 lg:p-20 flex flex-col justify-center relative z-10"
      >
        <div className="mb-12">
          <h1 className="text-7xl lg:text-8xl font-black text-[#1a3edb] tracking-tighter leading-none mb-4">
            SECURE
          </h1>
        </div>
        
        <div className="flex flex-col gap-4">
          <Link to="/login" className="px-8 py-2 text-[#1a3edb] font-semibold hover:underline">
            Member Login
          </Link>
        </div>

        {/* Floating background elements for left side */}
        <div className="absolute -bottom-10 -left-10 flex space-x-4">
          <div className="w-16 h-16 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>
      </motion.div>

      {/* Isometric/Right Blue Section */}
      <div className="flex-1 relative p-12 flex items-center justify-center overflow-hidden">
        {/* Animated Grid Interface - Simulating the isometric image */}
        <div className="relative w-full max-w-4xl aspect-square scale-110 lg:scale-125">
          {/* Main Tower / Central Node */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-64 bg-gradient-to-t from-blue-400/40 to-cyan-300/60 rounded-full blur-2xl opacity-50"
          />
          
          {/* Connections & Holograms */}
          <div className="absolute inset-0 isometric-container">
          </div>
        </div>

        {/* Dots background pattern */}
        <div className="absolute top-10 right-10 grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>
        <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-2 opacity-20">
          {[...Array(16)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="selection:bg-blue-200">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
