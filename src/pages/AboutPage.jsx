import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiAward } from 'react-icons/fi';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto min-h-screen relative z-10">
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
         <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6] mb-12">
          About <span className="text-[#64ffda]">Me</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-2/3">
            <div className="text-[#8892b0] text-lg leading-relaxed space-y-6 bg-[#112240]/30 p-8 rounded-2xl border border-[#233554] backdrop-blur-sm">
              <p>
                I am a Full-Stack Software Engineer studying at the undergraduate level who believes in creating high-performance digital solutions that are built on strong <span className="text-[#64ffda]">SDLC and OOP principles</span>.
              </p>
              <p>
                My strength is in creating user-friendly web and mobile interfaces using <span className="text-[#64ffda]">React, Flutter, and Figma</span>. Meanwhile I am developing my backend skills using <span className="text-[#64ffda]">Java and Spring Boot</span>, leveraging DSA and Design Patterns to build efficient scalable software.
              </p>
              <p>
                I am also an active member of the FOSS and CSSL communities, always learning to deliver high-quality user-focused software using disciplined development processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Education Card */}
              <motion.div whileHover={{ y: -5 }} className="bg-[#112240]/80 backdrop-blur-md p-6 rounded-xl border border-[#233554] hover:border-[#64ffda]/50 transition-all duration-300">
                <FiBookOpen className="text-[#64ffda] text-3xl mb-4"/>
                <h4 className="text-[#ccd6f6] font-bold text-lg mb-1">Education</h4>
                <p className="text-[#8892b0] text-sm">B.Sc (Hons) in Software Engineering</p>
                <p className="text-[#64ffda] text-xs font-mono mt-2">NSBM Green University</p>
              </motion.div>

              {/* Community Card */}
              <motion.div whileHover={{ y: -5 }} className="bg-[#112240]/80 backdrop-blur-md p-6 rounded-xl border border-[#233554] hover:border-[#007bff]/50 transition-all duration-300">
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
          </div>

          {/* Photo Section */}
          <div className="md:w-1/3 flex justify-center w-full">
            <div className="relative group w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-xl translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500"></div>
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden border-2 border-white/10">
                <img src="/profile.jpg" alt="M. H. S. Perera" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;