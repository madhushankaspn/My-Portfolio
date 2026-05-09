import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smoothEase = [0.22, 1, 0.36, 1];

  return (
    <div className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto min-h-screen relative z-10">
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
         <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6] mb-4">
            Get In <span className="text-[#64ffda]">Touch</span>
          </h1>
          <p className="text-[#8892b0] text-lg max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* වම් පැත්ත: Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            className="lg:w-1/3 space-y-8"
          >
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-[#112240] rounded-lg text-[#64ffda] border border-[#233554] group-hover:border-[#64ffda]/50 transition-all">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[#8892b0] text-xs font-mono uppercase tracking-widest">Email Me</p>
                  <a href="mailto:madhushankaspn@gmail.com" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">madhushankaspn@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-[#112240] rounded-lg text-[#007bff] border border-[#233554] group-hover:border-[#007bff]/50 transition-all">
                  <FiLinkedin size={24} />
                </div>
                <div>
                  <p className="text-[#8892b0] text-xs font-mono uppercase tracking-widest">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/supun-madhusanka-609ab22ba" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#007bff] transition-colors">Supun Madhusanka</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-[#112240] rounded-lg text-[#ccd6f6] border border-[#233554] group-hover:border-white/50 transition-all">
                  <FiGithub size={24} />
                </div>
                <div>
                  <p className="text-[#8892b0] text-xs font-mono uppercase tracking-widest">GitHub</p>
                  <a href="https://github.com/madhushankaspn" target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">madhushankaspn</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#233554]">
              <p className="text-[#8892b0] text-sm leading-relaxed">
                Based in <span className="text-[#ccd6f6]">Colombo, Sri Lanka</span>. <br />
                Open for remote work and freelance projects.
              </p>
            </div>
          </motion.div>

          {/* දකුණු පැත්ත: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
            className="lg:w-2/3"
          >
            <form className="bg-[#112240]/50 backdrop-blur-md p-8 rounded-2xl border border-[#233554] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[#64ffda] font-mono text-xs uppercase">Your Name</label>
                  <input type="text" placeholder="Supun Perera" className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[#64ffda] font-mono text-xs uppercase">Your Email</label>
                  <input type="email" placeholder="example@mail.com" className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[#64ffda] font-mono text-xs uppercase">Subject</label>
                <input type="text" placeholder="Hiring for a Project" className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[#64ffda] font-mono text-xs uppercase">Message</label>
                <textarea rows="5" placeholder="Hi Supun, I'd like to talk about..." className="w-full bg-[#0a192f] border border-[#233554] rounded-lg px-4 py-3 text-[#ccd6f6] outline-none focus:border-[#64ffda] transition-all resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-transparent border-2 border-[#64ffda] text-[#64ffda] py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.2)]"
                type="button"
              >
                <span>Send Message</span>
                <FiSend />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;