import React from 'react';
import { motion } from 'framer-motion';
// Icons සඳහා (මේවා අපි කලින් install කරා)
import { FiGithub, FiExternalLink } from 'react-icons/fi';

function App() {
  // ඔයාගේ ඇත්ත Projects ටික
  const projects = [
    {
      title: "Smart Waste Management System",
      description: "Configured secure Firebase Authentication and real-time Cloud Firestore database architecture. Conducted rigorous QA testing and debugging to handle edge cases and ensure a highly stable application. Managed team version control and agile workflow.",
      tech: ["Flutter", "Dart", "Firebase", "Git"],
      github: "https://github.com/madhushankaspn/smart-waste-app.git",
      image: "/project-images/waste.jpg" // පින්තූරයේ නම
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
    <div className="bg-[#0a192f] min-h-screen text-[#ccd6f6] font-sans overflow-x-hidden">
      
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#64ffda] text-2xl font-bold cursor-pointer"
        >
          Supun
        </motion.div>
        
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="hidden md:flex space-x-8 text-sm font-medium"
        >
          <li className="hover:text-[#64ffda] cursor-pointer transition-colors duration-300">Home</li>
          <li className="hover:text-[#64ffda] cursor-pointer transition-colors duration-300">About</li>
          <li className="hover:text-[#64ffda] cursor-pointer transition-colors duration-300">Projects</li>
          <li className="hover:text-[#64ffda] cursor-pointer transition-colors duration-300">Contact</li>
        </motion.ul>

        <motion.button 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-[#64ffda] text-[#64ffda] px-5 py-2 rounded hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300"
        >
          Say Hello
        </motion.button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-20 max-w-7xl mx-auto min-h-[80vh]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-3/5 mt-16 md:mt-0"
        >
          <p className="text-[#64ffda] text-lg font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            Supun Madhusanka
          </h1>
          <br></br>
          <br></br>
          <p className="text-[#8892b0] max-w-xl mb-10 text-lg leading-relaxed">
            I'm a Software Engineering student pursuing a B.Sc (Hons) degree at NSBM Green University. I specialize in full-stack development and have a strong focus on Software Quality Assurance (QA). I enjoy creating smart, scalable, and modern digital experiences.
          </p>
          
          <div className="flex space-x-6">
            <a href="/Supun_CV.pdf" download="Supun_CV.pdf" className="inline-block border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded font-bold hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)]">
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 flex justify-center items-center"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-2 bg-[#64ffda] rounded-full blur-lg opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a192f] z-10 bg-[#112240]">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </main>

      {/* Projects Section */}
      <section className="px-10 md:px-20 py-20 max-w-7xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#ccd6f6] mb-12 flex items-center"
        >
          <span className="text-[#64ffda] font-mono text-xl mr-3">01.</span> 
          Some Things I’ve Built
          <div className="h-[1px] bg-[#233554] w-48 md:w-96 ml-6"></div>
        </motion.h3>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#112240] rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-2xl flex flex-col group"
            >
              {/* Project Image Box */}
              <div className="h-48 overflow-hidden relative border-b border-[#233554]">
                {/* නිල් පාට Overlay එකක් (Mouse එක ගෙනිච්චම අයින් වෙනවා) */}
                <div className="absolute inset-0 bg-[#0a192f] opacity-50 group-hover:opacity-0 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // පින්තූරය නැත්නම් පෙන්නන dummy පින්තූරය
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
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
                
                <ul className="flex flex-wrap gap-3 text-xs font-mono text-[#64ffda] opacity-80">
                  {project.tech.map((techItem, techIndex) => (
                    <li key={techIndex} className="bg-[#0a192f] px-2 py-1 rounded">
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