import React from 'react';
import { motion } from 'framer-motion';

function App() {
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
        
        {/* වම් පැත්ත: විස්තරය */}
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
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">
            I build things for the web.
          </h2>
          <p className="text-[#8892b0] max-w-xl mb-10 text-lg leading-relaxed">
            I'm a Software Engineering student pursuing a B.Sc (Hons) degree at NSBM Green University. I specialize in full-stack development and have a strong focus on Software Quality Assurance (QA). I enjoy creating smart, scalable, and modern digital experiences.
          </p>
          
          <div className="flex space-x-6">
            <a 
     href="/Supun_CV.pdf" 
     download="Supun_CV.pdf" 
     className="inline-block border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded font-bold hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300 shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:shadow-[0_0_25px_rgba(100,255,218,0.6)]"
   >
     Download CV
   </a>
          </div>
        </motion.div>

        {/* දකුණු පැත්ත: Photo එක සහ Animation එක */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-2/5 flex justify-center items-center"
        >
          <div className="relative group cursor-pointer">
            {/* වටේට තියෙන Pulsing Glow එක */}
            <div className="absolute -inset-2 bg-[#64ffda] rounded-full blur-lg opacity-40 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse"></div>
            
            {/* ඔයාගේ Photo එක (දැනට Dummy Photo එකක් දාලා තියෙන්නේ) */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0a192f] z-10 bg-[#112240]">
              <img 
                src="public/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;