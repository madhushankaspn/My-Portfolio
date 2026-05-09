import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-[#233554] pt-12 pb-8 relative z-20 mt-auto">
      <div className="max-w-7xl mx-auto px-10">
        
        {/* ප්‍රධාන Footer කොටස (PC එකේදී තීරු 3කට බෙදෙනවා) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* 1. වම් පැත්ත: Logo/Name */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-[#64ffda] text-3xl font-bold tracking-wider cursor-pointer hover:text-white transition-colors duration-300">
              Supun
            </Link>
            <p className="text-[#8892b0] text-sm mt-2 font-mono">
              Software QA Engineer & Full-Stack Developer
            </p>
          </div>

          {/* 2. මැද කොටස: Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium">
            <Link to="/projects" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {/* මේවා දැනටමත් /#about වගේ හදලා තියෙන්නේ, ඉස්සරහට අපි ඒ sections හැදුවම මේවා හරියටම වැඩ කරනවා */}
            <Link to="/about" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 relative group">
              About Me
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#skills" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/#contact" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 relative group">
              Contact Me
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* 3. දකුණු පැත්ත: Social Media Icons */}
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://github.com/madhushankaspn" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300"
              title="GitHub"
            >
              <FiGithub size={24} />
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href="https://www.linkedin.com/in/supun-madhusanka-609ab22ba" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#8892b0] hover:text-[#007bff] transition-colors duration-300"
              title="LinkedIn"
            >
              <FiLinkedin size={24} />
            </motion.a>

            <motion.a 
              whileHover={{ y: -5, scale: 1.1 }}
              href="mailto:your.email@example.com" 
              className="text-[#8892b0] hover:text-[#d946ef] transition-colors duration-300"
              title="Email"
            >
              <FiMail size={24} />
            </motion.a>
          </div>
        </div>

        {/* යටින්ම තියෙන Copyright Text එක (වෙන් වෙන්න උඩින් ඉරක් දැම්මා) */}
        <div className="pt-8 border-t border-[#233554]/50 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-[#8892b0] text-sm font-mono transition-colors duration-300 hover:text-[#ccd6f6]">
            Designed & Built by <span className="text-[#64ffda]">Supun Madhusanka</span>
          </p>
          <p className="text-[#233554] text-xs mt-2 md:mt-0 font-mono hover:text-[#8892b0] transition-colors duration-300">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;