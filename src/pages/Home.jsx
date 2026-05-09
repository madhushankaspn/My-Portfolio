import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { projectsData } from '../data';

const Home = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 3 + 2
    }));
    setParticles(newParticles);
  }, []);

  const featuredProjects = projectsData.slice(0, 3);

  return (
    <>
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
         <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
         {particles.map((particle, i) => (
           <motion.div
             key={i}
             className="absolute bg-[#64ffda] rounded-full opacity-30 shadow-[0_0_10px_#64ffda]"
             style={{ width: `${particle.size}px`, height: `${particle.size}px`, top: `${particle.y}%`, left: `${particle.x}%` }}
             animate={{ y: [0, -40, 0], opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }}
             transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut" }}
           />
         ))}
      </div>

      <main className="relative flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 pt-40 pb-20 max-w-7xl mx-auto min-h-screen z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="md:w-3/5 mt-16 md:mt-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#64ffda] text-lg font-mono mb-4 flex items-center">
            <span className="w-8 h-[1px] bg-[#64ffda] mr-4 inline-block shadow-[0_0_8px_#64ffda]"></span>
            Hi, my name is
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4 hover:text-[#64ffda] transition-colors duration-300 cursor-default drop-shadow-lg">M. H. S. Perera.</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#8892b0] mb-6 drop-shadow-md">I build things for the web & mobile.</h2>
          <p className="text-[#8892b0] max-w-xl mb-10 text-lg leading-relaxed bg-[#112240]/40 p-4 rounded-lg border border-[#233554] backdrop-blur-sm">
            I'm a Software Engineering student pursuing a B.Sc (Hons) degree at NSBM Green University. I specialize in full-stack development and have a strong focus on Software Quality Assurance (QA). I enjoy creating smart, scalable, and modern digital experiences.
          </p>
          <div className="flex space-x-6">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/Supun_CV.pdf" download="Supun_CV.pdf" className="inline-block border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded font-bold hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.4)] hover:shadow-[0_0_30px_rgba(100,255,218,0.8)] relative overflow-hidden group">
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] z-0"></span>
              <span className="relative z-10">Download CV</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="md:w-2/5 flex justify-center items-center relative mt-10 md:mt-0">
          <div className="relative group cursor-pointer z-10">
            <div className="absolute -inset-6 bg-[#64ffda] rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="absolute -inset-2 bg-[#64ffda] rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#64ffda]/30 z-10 bg-[#112240] shadow-[0_0_20px_rgba(100,255,218,0.3)]">
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 -left-8 md:-left-16 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl text-[#ccd6f6] text-xs md:text-sm font-mono shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-20 flex items-center gap-2">
              <span className="text-[#64ffda]">{'</>'}</span> Full-Stack
            </motion.div>
            <motion.div animate={{ y: [8, -8, 8] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-12 -right-4 md:-right-12 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl text-[#ccd6f6] text-xs md:text-sm font-mono shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-20 flex items-center gap-2">
              <span className="text-[#00ffff]">📱</span> Mobile Dev
            </motion.div>
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute -top-4 right-0 md:right-4 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-2xl text-[#ccd6f6] text-xs md:text-sm font-mono shadow-[0_4px_15px_rgba(0,0,0,0.3)] z-20 flex items-center gap-2">
              <span className="text-[#d946ef]">✅</span> QA Engineer
            </motion.div>
          </div>
        </motion.div>
        
        <div className="absolute left-10 bottom-0 w-[1px] h-32 bg-gradient-to-b from-[#64ffda] to-transparent opacity-50 hidden md:block shadow-[0_0_8px_#64ffda]"></div>
      </main>

      <section className="relative px-10 md:px-20 py-20 max-w-7xl mx-auto z-10 bg-[#0a192f]/50 backdrop-blur-sm rounded-3xl mb-20 border border-[#233554] overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.9 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <h3 className="text-4xl font-bold text-[#ccd6f6] mb-4 tracking-wide relative">
            Featured Projects
            <span className="absolute -top-4 -right-6 text-[#64ffda] text-2xl animate-pulse"></span>
          </h3>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent w-48 shadow-[0_0_10px_#64ffda]"></div>
        </motion.div>

        {/* 
          අලුත් Layout එක! 
          padding-top (pt-12) දීලා තියෙනවා මැද එකට විතරක් උඩට යන්න ඉඩ හදන්න. 
          items-start දාලා තියෙනවා Cards ඔක්කොම උඩින් පටන් ගන්න.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-12 md:pt-16">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ 
                opacity: 0, 
                // වමෙන්, යටින්, දකුණෙන් එන animation එක
                x: index === 0 ? -50 : index === 2 ? 50 : 0, 
                y: index === 1 ? 50 : 0 
              }} 
              whileInView={{ opacity: 1, x: 0, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }} 
              
              // *** මේක තමයි වෙනස! ***
              // මැද කාඩ් එක (index 1) විතරක් -mt-16 (උඩට) අදිනවා. 
              // Hover කරද්දී තව ටිකක් උඩට (y: -10) යනවා.
              whileHover={{ y: index === 1 ? -74 : -10 }} 

              // මැද කාඩ් එක උඩට යන CSS එක (md screens වල විතරයි)
              className={`bg-[#112240]/80 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)] flex flex-col group border border-[#233554] hover:border-[#64ffda]/50 transition-all duration-300 relative z-20 
                ${index === 1 ? 'md:-mt-16' : 'md:mt-4'}
              `}
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

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.8 }} 
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }} 
          className="mt-16 flex justify-center relative z-20"
        >
          <Link to="/projects">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border border-[#64ffda] text-[#64ffda] px-8 py-3 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.2)] group"
            >
              <span>View All Projects</span>
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;