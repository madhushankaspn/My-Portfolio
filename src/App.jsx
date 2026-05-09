import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Footer එක මෙතනට import කරලා තියෙනවා
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';

function App() {
  return (
    <Router>
      {/* flex flex-col දාලා තියෙන්නේ Footer එක හැමතිස්සෙම යටින්ම තියාගන්න */}
      <div className="bg-[#0a192f] min-h-screen text-[#ccd6f6] font-sans overflow-x-hidden relative flex flex-col">
        <Navbar />
        
        {/* ප්‍රධාන පිටු ටික පෙන්වන කොටස */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
          </Routes>
        </div>

        {/* හැම පිටුවකම යටින්ම පේන Footer එක */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;