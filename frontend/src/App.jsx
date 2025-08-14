import { TbLogout } from "react-icons/tb"; 
import { FcAbout } from "react-icons/fc"; 
import { ImBooks } from "react-icons/im"; 
import { SiFuturelearn } from "react-icons/si"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { RiRobot2Fill } from "react-icons/ri"; // ✅ Chatbot icon
import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useTheme } from './context/ThemeContext'; // ✅ Theme context
import Home from './pages/Home';
import Learn from './pages/Learn';
import Glossary from './pages/Glossary';
import About from './pages/About';
import VideoPlayer from './pages/VideoPlayer';
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadVideo from "./pages/UploadVideo";
import Chatbot from "./pages/Chatbot";
import './App.css'; // ✅ Import global styles here

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';
  const { darkMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      {!hideNavbar && (
        <nav className="navbar">
          <Link to="/home" className="nav-link"><AiOutlineHome /> Home</Link>
          <Link to="/learn" className="nav-link"><SiFuturelearn /> Learn</Link>
          <Link to="/glossary" className="nav-link"><ImBooks /> Glossary</Link>
          <Link to="/about" className="nav-link"><FcAbout /> About</Link>
          <Link to="/chatbot" className="nav-link"><RiRobot2Fill /> Chatbot</Link> {/* ✅ New Chatbot link */}
          
          <div className="button-group">
            <button onClick={toggleTheme} className="btn">
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
            <button onClick={handleLogout} className="btn logout">
              <TbLogout /> 
            </button>
          </div>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn/video/:topic" element={<VideoPlayer />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App;
