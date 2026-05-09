import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// FiUsers කියන එක අලුතින් import එකට දැම්මා!
import { FiCode, FiSmartphone, FiDatabase, FiCloud, FiTool, FiCheckCircle, FiStar, FiCpu, FiUsers } from 'react-icons/fi';

const SkillsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const smoothEase = [0.22, 1, 0.36, 1];

  const coreSkills = [
    { name: "HTML, CSS & JavaScript", level: 90 },
    { name: "Java & Object Oriented Programming", level: 75 },
    { name: "React & Frontend Libraries", level: 65 },
    { name: "Node.js & Backend Frameworks", level: 60 },
    { name: "Python, Databases & DevOps Tools", level: 60 },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FiCode />,
      skills: ["Java", "Python", "JavaScript (ES6+)", "Dart"]
    },
    {
      title: "Frontend & Mobile",
      icon: <FiSmartphone />,
      skills: ["React.js", "Flutter", "HTML5 & CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend Frameworks",
      icon: <FiCpu />,
      skills: ["Spring Boot", ".NET 8", "Node.js (Express)"]
    },
    {
      title: "Databases & Cloud",
      icon: <FiDatabase />,
      skills: ["MySQL", "MongoDB", "Firebase", "Entity Framework", "AWS (Basic)"]
    },
    {
      title: "Tools & IDEs",
      icon: <FiTool />,
      skills: ["Git & GitHub", "Visual Studio Code", "IntelliJ IDEA", "Figma", "Android Studio"]
    },
    {
      title: "Core Concepts & QA",
      icon: <FiCheckCircle />,
      skills: ["Software QA (Manual & Test Cases)", "RESTful APIs", "SignalR (Real-Time)", "SDLC & OOP"]
    }
  ];

  const softSkills = [
    "Problem-Solving & Analytical Thinking",
    "Adaptability & Fast Learning",
    "Team Collaboration & Agile"
  ];

  return (
    <div className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto min-h-screen relative z-10 overflow-hidden">
      
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
         <div className="absolute bottom-[20%] right-[20%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6] mb-6 inline-block relative">
            Technical <span className="text-[#64ffda]">Skills</span>
          </h1>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, programming languages, and development tools.
          </p>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent w-48 mx-auto mt-8 shadow-[0_0_10px_#64ffda]"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            className="lg:w-1/2 bg-[#112240]/50 backdrop-blur-md p-8 rounded-2xl border border-[#233554]"
          >
            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-8 flex items-center gap-3">
              <FiStar className="text-[#64ffda]" /> Core Proficiency
            </h3>
            
            <div className="space-y-8">
              {coreSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#ccd6f6] font-medium font-mono text-sm">{skill.name}</span>
                    <span className="text-[#64ffda] font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#0a192f] rounded-full h-2.5 border border-[#233554]">
                    <motion.div 
                      className="bg-gradient-to-r from-[#007bff] to-[#64ffda] h-2.5 rounded-full shadow-[0_0_10px_#64ffda]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + (index * 0.1), ease: smoothEase }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#233554]/50">
               <h3 className="text-xl font-bold text-[#ccd6f6] mb-6 flex items-center gap-3">
                <FiUsers className="text-[#007bff]" /> Soft Skills
               </h3>
               <div className="flex flex-col gap-3">
                 {softSkills.map((softSkill, idx) => (
                   <motion.div 
                     key={idx}
                     whileHover={{ x: 5 }}
                     className="flex items-center gap-3 text-[#8892b0] bg-[#0a192f] p-3 rounded-lg border border-[#233554] hover:border-[#64ffda]/40 transition-colors"
                   >
                     <FiCheckCircle className="text-[#64ffda]" />
                     <span>{softSkill}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: smoothEase }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 content-start"
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-[#112240]/80 p-6 rounded-xl border border-[#233554] hover:border-[#64ffda]/50 hover:shadow-[0_5px_20px_rgba(100,255,218,0.1)] transition-all duration-300 group"
              >
                <div className="text-[#64ffda] text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="text-[#ccd6f6] font-bold text-lg mb-4">{category.title}</h4>
                <ul className="space-y-2">
                  {category.skills.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#8892b0] text-sm">
                      <span className="text-[#007bff] mt-1 text-xs">▹</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SkillsPage;