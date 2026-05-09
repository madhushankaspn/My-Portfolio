import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHexagon } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Me', path: '/#about' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center relative z-10">
        
        <Link to="/" className="flex items-center space-x-2 text-[#64ffda] cursor-pointer group">
          <FiHexagon size={28} className="group-hover:rotate-180 transition-transform duration-700 stroke-2" />
          <span className="text-2xl font-bold tracking-wider">Supun.</span>
        </Link>
        
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((item, index) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={index} className="relative group">
                <Link 
                  to={item.path}
                  className={`cursor-pointer transition-colors duration-300 ${isActive ? 'text-[#64ffda]' : 'text-[#ccd6f6] hover:text-[#64ffda]'}`}
                >
                  {item.name}
                </Link>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#64ffda] transition-all duration-300 shadow-[0_0_8px_#64ffda] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </li>
            );
          })}
        </ul>

        <button className="border border-[#64ffda] text-[#64ffda] px-5 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_10px_rgba(100,255,218,0.2)] group relative overflow-hidden">
           <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] z-0"></span>
           <span className="relative z-10">Hire Me</span>
        </button>
      </div>

      {/* 
        අලුත් Moving Light Line එක (Gradient සහ දිග/වේගය වෙනස් කළ එක) 
      */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#233554]/30 overflow-hidden">
        <motion.div 
          // Gradient එකක් පාවිච්චි කරලා තියෙනවා: දකුණු පැත්ත තදයි, වම් පැත්ත fade වෙනවා
          className="h-full bg-gradient-to-r from-transparent via-[#64ffda]/50 to-[#64ffda] shadow-[10px_0_15px_2px_#64ffda]"
          // දිග 40% ක් කළා
          style={{ width: '40%' }}
          animate={{ x: ['-100%', '300%'] }} 
          transition={{ 
            duration: 8,         // වේගය ගොඩක් අඩු කළා (තත්පර 8ක්)
            repeat: Infinity,    
            ease: "linear"       
          }}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;