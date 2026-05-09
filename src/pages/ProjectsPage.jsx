import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projectsData } from '../data';

const ProjectsPage = () => {

  // මේ පිටුවට ආපු ගමන්ම සයිට් එක උඩටම Scroll වෙන විදිහට හදන්න (නැත්නම් Home එකේ හිටපු තැනම ඉඳන් පටන් ගනීවි)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // මේකෙන් තමයි Cards එකින් එක (Stagger වෙලා) එන්න හදන්නේ
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // එක Card එකකට පස්සේ ඊළඟ එක එන්න තියෙන පරතරය
      }
    }
  };

  // මේකෙන් තමයි එක Card එකක් Smooth විදිහට Pop-up වෙන්නේ
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  return (
    <div className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto min-h-screen relative z-10">
      
      {/* Background Grid සහ Blobs (Home page එකේ වගේම පාලු නැති වෙන්න) */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
         <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* මාතෘකාව (Title Animation) */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6] mb-6 inline-block relative">
          My <span className="text-[#64ffda]">Projects</span>
          
          {/* මාතෘකාවට උඩින් කැරකෙන පොඩි Rocket එකක් 🚀 */}
          <motion.span 
            animate={{ rotate: [0, 15, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-10 text-3xl"
          >
            🚀
          </motion.span>
        </h1>
        <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
          A collection of my work, ranging from full-stack web platforms to mobile applications. Built with passion and clean code.
        </p>
        
        {/* මාතෘකාව යටින් තියෙන ලස්සන Gradient ඉර */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent w-64 mx-auto mt-8 shadow-[0_0_10px_#64ffda]"></div>
      </motion.div>

      {/* Projects Grid (මෙතනින් තමයි එකින් එක Pop-up වෙන්නේ) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="bg-[#112240]/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)] flex flex-col group border border-[#233554] hover:border-[#64ffda]/50 transition-all duration-300 relative"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="h-48 overflow-hidden relative border-b border-[#233554]">
              <div className="absolute inset-0 bg-[#0a192f]/60 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"; }} />
            </div>
            
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_#64ffda]"></div>
              
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">{project.title}</h4>
                
                {/* Blinking GitHub Icon (Home page එකේ වගේම) */}
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[#64ffda] hover:text-white drop-shadow-[0_0_8px_rgba(100,255,218,0.8)]"
                  title="View Source Code"
                >
                  <FiGithub size={24} />
                </motion.a>
              </div>
              
              <p className="text-[#8892b0] text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
              
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#64ffda] opacity-90">
                {project.tech.map((techItem, techIndex) => (
                  <li key={techIndex} className="bg-[#0a192f] px-3 py-1 rounded-full border border-[#64ffda]/20 shadow-[0_0_5px_rgba(100,255,218,0.1)]">{techItem}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  );
};

export default ProjectsPage;