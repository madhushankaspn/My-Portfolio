import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

// අපි අලුතින් හදපු දේවල් import කරගත්තා
import { ThemeProvider } from './context/ThemeContext';
//import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* 
          මෙහි 'bg-white dark:bg-[#0a192f]' සහ 'text-slate-900 dark:text-[#ccd6f6]' දාලා තියෙන්නේ 
          Theme එක මාරු වෙද්දී Background එකයි අකුරුයි දෙකම වෙනස් වෙන්නයි.
        */}
        <div className="bg-white dark:bg-[#0a192f] min-h-screen text-slate-900 dark:text-[#ccd6f6] font-sans overflow-x-hidden relative flex flex-col transition-colors duration-300">
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>

          {/* Theme මාරු කරන බටන් එක මෙතන තියෙනවා */}
          {/* <ThemeToggle /> */}

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;