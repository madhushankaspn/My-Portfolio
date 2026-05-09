import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUsers, FiAward } from 'react-icons/fi';

const AboutSection = () => {
  return (
    // id="about" දාලා තියෙන්නේ Nav bar එකෙන් ක්ලික් කරාම මෙතනට එන්න
    <section id="about" className="relative px-10 md:px-20 py-24 max-w-7xl mx-auto z-10">
      
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-3xl md:text-4xl font-bold text-[#ccd6f6] mb-12 flex items-center">
          <span className="text-[#64ffda] font-mono text-xl md:text-2xl mr-3">02.</span> 
          About Me
          <div className="h-[1px] bg-gradient-to-r from-[#233554] to-transparent w-48 md:w-96 ml-6"></div>
        </h3>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-16 items-start">
        
        {/* වම් පැත්ත: විස්තරය සහ Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="md:w-2/3"
        >
          {/* About Text */}
          <div className="text-[#8892b0] text-lg leading-relaxed space-y-4">
            <p>
              I am a Full-Stack Software Engineer studying at the undergraduate level who believes in creating high-performance digital solutions that are built on strong <span className="text-[#64ffda]">SDLC and OOP principles</span>. My strength is in creating user-friendly web and mobile interfaces using <span className="text-[#64ffda]">React, Flutter, and Figma</span>.
            </p>
            <p>
              Meanwhile I will be working on developing my backend skills using <span className="text-[#64ffda]">Java and Spring Boot</span>, and I will leverage <span className="text-[#64ffda]">DSA</span> and Design Patterns to build efficient scalable software. I am also an active member of the FOSS and CSSL communities and am always learning so I can deliver high-quality user-focused software using disciplined development processes.
            </p>
          </div>

          {/* Education සහ Community Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            
            {/* Education Card */}
            <div className="bg-[#112240]/80 backdrop-blur-md p-6 rounded-xl border border-[#233554] hover:border-[#64ffda]/50 hover:shadow-[0_5px_20px_rgba(100,255,218,0.1)] transition-all duration-300 group">
              <FiBookOpen className="text-[#64ffda] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"/>
              <h4 className="text-[#ccd6f6] font-bold text-lg mb-1">Education</h4>
              <p className="text-[#8892b0] text-sm">B.Sc (Hons) in Software Engineering</p>
              <div className="mt-4 pt-4 border-t border-[#233554]/50">
                <p className="text-[#64ffda] text-xs font-mono">NSBM Green University</p>
              </div>
            </div>

            {/* Communities Card */}
            <div className="bg-[#112240]/80 backdrop-blur-md p-6 rounded-xl border border-[#233554] hover:border-[#007bff]/50 hover:shadow-[0_5px_20px_rgba(0,123,255,0.1)] transition-all duration-300 group">
              <FiUsers className="text-[#007bff] text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"/>
              <h4 className="text-[#ccd6f6] font-bold text-lg mb-3">Communities</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiAward className="text-[#007bff] mt-1 shrink-0" size={16}/>
                  <div>
                    <p className="text-[#8892b0] text-sm font-medium">Council Member (Design)</p>
                    <p className="text-[#64ffda] text-xs font-mono mt-0.5">FOSS NSBM | 2026 – Present</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FiAward className="text-[#007bff] mt-1 shrink-0" size={16}/>
                  <div>
                    <p className="text-[#8892b0] text-sm font-medium">Publicity Sub-committee</p>
                    <p className="text-[#64ffda] text-xs font-mono mt-0.5">CSSL GenZ | 2026 – Present</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* දකුණු පැත්ත: Image එක */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="md:w-1/3 flex justify-center w-full mt-10 md:mt-0"
        >
          <div className="relative group w-64 h-64 md:w-72 md:h-72">
            
            {/* පින්තූරයට පිටිපස්සෙන් තියෙන Offset Border එක (Mouse ගෙනිච්චම හැඩේ වෙනස් වෙනවා) */}
            <div className="absolute inset-0 border-2 border-[#64ffda] rounded-xl translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 z-0"></div>
            
            {/* පින්තූරය පිටිපස්සේ Glow එක */}
            <div className="absolute inset-0 bg-[#64ffda] rounded-xl blur-2xl opacity-10 group-hover:opacity-30 transition-opacity duration-500 z-0"></div>
            
            {/* Image Box */}
            <div className="relative z-10 w-full h-full rounded-xl overflow-hidden bg-[#112240] shadow-xl">
              {/* මුලින් Grayscale (කළු-සුදු) වෙලා තියෙන්නේ, Mouse ගෙනිච්චම Color වෙනවා */}
              <div className="absolute inset-0 bg-[#0a192f]/30 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
              <img 
                src="/profile.jpg" 
                alt="M. H. S. Perera" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" 
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;