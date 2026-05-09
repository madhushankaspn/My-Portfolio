import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiAward, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth Animation එක සඳහා පාවිච්චි කරන Easing Curve එක
  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <div className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto min-h-screen relative z-10 overflow-hidden">
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
         <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* මාතෘකාව: උඩ ඉඳන් පල්ලෙහාට (y: -50) */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="text-4xl md:text-6xl font-bold text-[#ccd6f6] mb-12"
        >
          About <span className="text-[#64ffda]">Me</span>
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-2/3">
            {/* විස්තරය: වම් පැත්තේ ඉඳන් දකුණට (x: -80) */}
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: smoothEase }}
              className="text-[#8892b0] text-lg leading-relaxed space-y-6 bg-[#112240]/30 p-8 rounded-2xl border border-[#233554] backdrop-blur-sm shadow-xl"
            >
              <p>
                I am a Full-Stack Software Engineer studying at the undergraduate level who believes in creating high-performance digital solutions that are built on strong <span className="text-[#64ffda]">SDLC and OOP principles</span>.
              </p>
              <p>
                My strength is in creating user-friendly web and mobile interfaces using <span className="text-[#64ffda]">React, Flutter, and Figma</span>. Meanwhile I am developing my backend skills using <span className="text-[#64ffda]">Java and Spring Boot</span>, leveraging DSA and Design Patterns to build efficient scalable software.
              </p>
              <p>
                I am also an active member of the FOSS and CSSL communities, always learning to deliver high-quality user-focused software using disciplined development processes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Education Card: යට ඉඳන් උඩට (y: 50) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }} 
                className="bg-[#112240]/80 backdrop-blur-md p-6 rounded-xl border border-[#233554] hover:border-[#64ffda]/50 hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)] transition-colors duration-300"
              >
                <FiBookOpen className="text-[#64ffda] text-3xl mb-4"/>
                <h4 className="text-[#ccd6f6] font-bold text-lg mb-1">Education</h4>
                <p className="text-[#8892b0] text-sm">B.Sc (Hons) in Software Engineering</p>
                <p className="text-[#64ffda] text-xs font-mono mt-2">NSBM Green University</p>
              </motion.div>

              {/* Community Card: යට ඉඳන් උඩට (y: 50, පොඩි delay එකක් එක්ක) */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: smoothEase }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }} 
                className="bg-[#112240]/80 backdrop-blur-md p-6 rounded-xl border border-[#233554] hover:border-[#007bff]/50 hover:shadow-[0_10px_30px_-15px_rgba(0,123,255,0.3)] transition-colors duration-300"
              >
                <FiUsers className="text-[#007bff] text-3xl mb-4"/>
                <h4 className="text-[#ccd6f6] font-bold text-lg mb-3">Community</h4>
                <ul className="space-y-3 text-sm text-[#8892b0]">
                  <li className="flex items-center gap-2">
                    <FiAward className="text-[#007bff]"/> Council Member - FOSS NSBM
                  </li>
                  <li className="flex items-center gap-2">
                    <FiAward className="text-[#007bff]"/> Publicity Team - CSSL GenZ
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Buttons: යට ඉඳන් උඩට (y: 30) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: smoothEase }}
              className="flex flex-wrap items-center gap-6 mt-10 pt-6 border-t border-[#233554]/50"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                href="/Supun_CV.pdf" 
                download="Supun_CV.pdf" 
                className="flex items-center gap-2 border-2 border-[#64ffda] text-[#64ffda] px-6 py-3 rounded font-bold hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.4)]"
              >
                <FiDownload className="text-xl" />
                <span>Download CV</span>
              </motion.a>

              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://github.com/madhushankaspn" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300 bg-[#112240] p-3 rounded-full border border-[#233554] hover:border-[#64ffda]/50 shadow-lg"
                  title="GitHub"
                >
                  <FiGithub size={24} />
                </motion.a>
                
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="https://www.linkedin.com/in/supun-madhusanka-609ab22ba" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#8892b0] hover:text-[#007bff] transition-colors duration-300 bg-[#112240] p-3 rounded-full border border-[#233554] hover:border-[#007bff]/50 shadow-lg"
                  title="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* පින්තූරය: දකුණු පැත්තේ ඉඳන් වමට (x: 80) */}
          <motion.div 
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: smoothEase }}
            className="md:w-1/3 flex justify-center w-full mt-10 md:mt-0"
          >
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-xl translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="M. H. S. Perera" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;