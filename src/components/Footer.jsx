import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] border-t border-[#233554] py-8 text-center relative z-20 mt-auto">
      <div className="max-w-7xl mx-auto px-10 flex flex-col items-center">
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4">
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
            // ඔයාගේ LinkedIn ලින්ක් එකට https:// එකතු කරලා තියෙන්නේ
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
            // මෙතන ඔයාගේ ඇත්ත Email එක දාන්න පුළුවන් (උදා: mailto:supun@gmail.com)
            href="mailto:madhushankasupun7@gmail.com" 
            className="text-[#8892b0] hover:text-[#d946ef] transition-colors duration-300"
            title="Email"
          >
            <FiMail size={24} />
          </motion.a>
        </div>

        {/* Copyright Text */}
        <div className="group cursor-default">
          <p className="text-[#8892b0] text-sm font-mono transition-colors duration-300 group-hover:text-[#ccd6f6]">
            Designed & Built by <span className="text-[#64ffda]">T.A.S.Madhusanka</span>
          </p>
          <p className="text-[#233554] text-xs mt-2 font-mono group-hover:text-[#8892b0] transition-colors duration-300">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;