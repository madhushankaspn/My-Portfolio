import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

function App() {
  // Scroll කරද්දී Navbar එකේ පෙනුම වෙනස් කරන්න State එකක්
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Smart Waste Management System",
      description: "Configured secure Firebase Authentication and real-time Cloud Firestore database architecture. Conducted rigorous QA testing and debugging to handle edge cases and ensure a highly stable application. Managed team version control and agile workflow.",
      tech: ["Flutter", "Dart", "Firebase", "Git"],
      github: "https://github.com/madhushankaspn/smart-waste-app.git",
      image: "/project-images/waste.jpg"
    },
    {
      title: "Student Management System",
      description: "Developed an MVC-based web application using Java EE to automate university operations. Engineered a secure Admin Dashboard utilizing JDBC Prepared Statements to ensure data integrity and prevent SQL Injection.",
      tech: ["Java EE", "MySQL", "JDBC", "Bootstrap"],
      github: "https://github.com/Java-team-dea/SMS-Project.git",
      image: "/project-images/sms.jpg"
    },
    {
      title: "Task Master",
      description: "A Full-Stack CRUD application featuring a modern UI and a secure RESTful API architecture. Integrated MySQL database with Spring Data JPA for persistent data handling and conducted comprehensive API testing via Postman.",
      tech: ["React.js", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/madhushankaspn/task-management-frontend.git",
      image: "/project-images/task.jpg"
    },
    {
      title: "Discover Sri Lanka",
      description: "A fully responsive tourism platform featuring a dynamic Hero Slideshow and destination media galleries. Implemented User Authentication and an Admin Panel for content management.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/madhushankaspn/sri-lanka-tourism.git",
      image: "/project-images/tourism.jpg"
    },
    {
      title: "LUXE Store",
      description: "A premium e-commerce platform featuring a dark luxury aesthetic, shopping cart functionality, and promo code support. Implemented a comprehensive Admin Dashboard utilizing Browser LocalStorage.",
      tech: ["Vanilla JS", "HTML5", "CSS3"],
      github: "https://github.com/madhushankaspn/LUXE-Store.git",
      image: "/project-images/luxe.jpg"
    }
  ];

  return (
    // Background එකට Gradient එකක් සහ තරු වගේ effect එකක් දාලා තියෙනවා
    <div className="bg-gradient-to-br from-[#020c1b] via-[#0a192f] to-[#112240] min-h-screen text-[#ccd6f6] font-sans overflow-x-hidden relative">
      
      {/* Background Particles Animation (පසුබිමේ පාලු ගතිය නැති කරන්න) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
         <div className="absolute top-[30%] right-[20%] w-72 h-72 bg-[#007bff] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[20%] left-[40%] w-72 h-72 bg-[#64ffda] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Sticky Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          {/* Logo එක සහ නම */}
          <div className="flex items-center space-x-2 text-[#64ffda] cursor-pointer group">
            <FiCode size={28} className="group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-2xl font-bold tracking-wider">Supun.</span>
          </div>
          
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'Projects', 'About Me', 'Skills', 'Contact'].map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ y: -2 }}
                className="hover:text-[#64ffda] cursor-pointer transition-colors duration-300 relative group"
              >
                {item}
                {/* යටින් යන Light Line එක */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#64ffda]"></span>
              </motion.li>
            ))}
          </ul>

          <button className="border border-[#64ffda] text-[#64ffda] px-5 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_10px_rgba(100,255,218,0.2)]">
            Hire Me
          </button>
        </div>
        
        {/* Nav bar එක යටින් යන දිලිසෙන රේඛාව */}
        <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-[#64ffda]/50 to-transparent transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      </motion.nav>

      {/* Hero Section */}
      <main className="relative flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 pt-32 pb-20 max-w-7xl mx-auto min-h-screen">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-3/5 mt-16 md:mt-0 z-10"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#64ffda] text-lg font-mono mb-4 flex items-center"
          >
            <span className="w-8 h-[1px] bg-[#64ffda] mr-4 inline-block"></span>
            Hi, my name is
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4 hover:text-[#64ffda] transition-colors duration-300 cursor-default">
            M. H. S. Perera.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-[#8892b0] mb-6">
            I build things for the web & mobile.
          </h2>
          <p className="text-[#8892b0] max-w-xl mb-10 text-lg leading-relaxed">
            I'm a Software Engineering student pursuing a B.Sc (Hons) degree at NSBM Green University. I specialize in full-stack development and have a strong focus on Software Quality Assurance (QA). I enjoy creating smart, scalable, and modern digital experiences.
          </p>
          
          <div className="flex space-x-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Supun_CV.pdf" 
              download="Supun_CV.pdf" 
              className="inline-block border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded font-bold hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.4)] hover:shadow-[0_0_30px_rgba(100,255,218,0.8)] relative overflow-hidden group"
            >
              {/* Button Hover Light Effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] z-0"></span>
              <span className="relative z-10">Download CV</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 flex justify-center items-center z-10"
        >
          <div className="relative group cursor-pointer mt-10 md:mt-0">
            {/* Spinning Light Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#64ffda] to-[#007bff] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin-slow"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a192f] z-10 bg-[#112240]">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Page දිගේ යන Light Line එක */}
        <div className="absolute left-10 bottom-0 w-[1px] h-32 bg-gradient-to-b from-[#64ffda] to-transparent opacity-50 hidden md:block"></div>
      </main>

      {/* Projects Section */}
      <section className="relative px-10 md:px-20 py-20 max-w-7xl mx-auto z-10">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center"
        >
          <span className="text-[#64ffda] font-mono text-xl mr-3">01.</span> 
          Projects
          <div className="h-[1px] bg-gradient-to-r from-[#233554] to-transparent w-full ml-6"></div>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-[#112240] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_-15px_rgba(100,255,218,0.3)] flex flex-col group border border-transparent hover:border-[#64ffda]/30 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#0a192f]/60 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                {/* කාඩ් එක උඩින් යන Light Effect එක */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex space-x-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                      <FiGithub size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-[#8892b0] text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-2 text-xs font-mono text-[#64ffda] opacity-80">
                  {project.tech.map((techItem, techIndex) => (
                    <li key={techIndex} className="bg-[#64ffda]/10 px-3 py-1 rounded-full border border-[#64ffda]/20">
                      {techItem}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;