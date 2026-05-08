import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHexagon } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // දැනට ඉන්න page එක හොයාගන්න

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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/80 backdrop-blur-md shadow-lg py-4 border-b border-[#64ffda]/10' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center relative z-10">
        
        <Link to="/" className="flex items-center space-x-2 text-[#64ffda] cursor-pointer group">
          <FiHexagon size={28} className="group-hover:rotate-180 transition-transform duration-700 stroke-2" />
          <span className="text-2xl font-bold tracking-wider">Supun.</span>
        </Link>
        
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((item, index) => {
            // මේ link එක දැන් ඉන්න page එකද කියලා බලනවා
            const isActive = location.pathname === item.path;
            
            return (
              <li key={index} className="relative group">
                <Link 
                  to={item.path}
                  className={`cursor-pointer transition-colors duration-300 ${isActive ? 'text-[#64ffda]' : 'text-[#ccd6f6] hover:text-[#64ffda]'}`}
                >
                  {item.name}
                </Link>
                {/* Active page එක නම් Line එක දිගටම තියෙනවා, නැත්නම් Hover කරාම එනවා */}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#64ffda] transition-all duration-300 shadow-[0_0_8px_#64ffda] ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </li>
            );
          })}
        </ul>

        <button className="border border-[#64ffda] text-[#64ffda] px-5 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_10px_rgba(100,255,218,0.2)]">
          Hire Me
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;