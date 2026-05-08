import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projectsData } from '../data';

const ProjectsPage = () => {
  return (
    <div className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto min-h-screen relative z-10">
      
      {/* Background Grid - මේ page එකෙත් පාලු නැති වෙන්න */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-4">All My Projects</h1>
        <p className="text-[#8892b0] mb-16 text-lg max-w-2xl">
          Here is a complete list of projects I've worked on, ranging from mobile apps to full-stack web platforms.
        </p>
      </motion.div>

      {/* ඔක්කොම Projects ටික මෙතන පෙන්වනවා */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-[#112240]/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)] flex flex-col group border border-[#233554] hover:border-[#64ffda]/50 transition-all duration-300 relative z-10"
          >
            <div className="h-48 overflow-hidden relative border-b border-[#233554]">
              <div className="absolute inset-0 bg-[#0a192f]/60 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"; }} />
            </div>
            <div className="p-6 flex flex-col flex-grow relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_#64ffda]"></div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">{project.title}</h4>
                <a href={project.github} target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"><FiGithub size={20} /></a>
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
      </div>
    </div>
  );
};

export default ProjectsPage;