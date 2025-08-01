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
          <Link to="/home" className="nav-link">🏠 Home</Link>
          <Link to="/learn" className="nav-link">📚 Learn</Link>
          <Link to="/glossary" className="nav-link">📖 Glossary</Link>
          <Link to="/about" className="nav-link">ℹ️ About</Link>
          <div className="button-group">
            <Link to="/learn" className="btn">▶️ Start Learning</Link>
            <Link to="/leaderboard" className="btn">🏆 Leaderboard</Link>
            <Link to="/profile" className="btn">👤 Profile</Link>
            <button onClick={toggleTheme} className="btn">
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
            <button onClick={handleLogout} className="btn logout">
              🔓 Logout
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
      </Routes>
    </div>
  );
}

export default App;
