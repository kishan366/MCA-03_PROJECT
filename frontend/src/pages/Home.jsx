// import React from 'react';
// import { Link } from 'react-router-dom';

// const styles = {
//   wrapper: {
//     fontFamily: "'Segoe UI', sans-serif",
//     background: 'linear-gradient(to bottom right, #fdfcfb, #e2d1c3)',
//     padding: '3rem 1rem',
//     minHeight: '100vh',
//     textAlign: 'center',
//     animation: 'fadeIn 1s ease-in-out',
//   },
//   title: {
//     fontSize: '3rem',
//     color: '#1a202c',
//     marginBottom: '1rem',
//     animation: 'slideInTop 1s ease',
//   },
//   description: {
//     fontSize: '1.25rem',
//     color: '#4a5568',
//     marginBottom: '2rem',
//     maxWidth: '700px',
//     marginInline: 'auto',
//     animation: 'fadeIn 1.2s ease',
//   },
//   buttonGroup: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '1rem',
//     justifyContent: 'center',
//     marginBottom: '2rem',
//   },
//   ctaButton: {
//     background: 'linear-gradient(to right, #667eea, #764ba2)',
//     color: 'white',
//     padding: '0.85rem 2rem',
//     fontSize: '1rem',
//     borderRadius: '999px',
//     textDecoration: 'none',
//     transition: 'transform 0.3s ease',
//     minWidth: '160px',
//   },
//   logoutButton: {
//     background: 'linear-gradient(to right, #ff5858, #f857a6)',
//     color: 'white',
//     padding: '0.85rem 2rem',
//     fontSize: '1rem',
//     borderRadius: '999px',
//     border: 'none',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease',
//     minWidth: '160px',
//   },
//   ctaHover: {
//     transform: 'scale(1.05)',
//   },
//   featuresSection: {
//     marginTop: '3rem',
//     animation: 'fadeInUp 1.3s ease',
//   },
//   featuresTitle: {
//     fontSize: '2rem',
//     color: '#2b6cb0',
//     marginBottom: '1rem',
//   },
//   featureList: {
//     listStyle: 'none',
//     padding: 0,
//     display: 'grid',
//     gap: '1rem',
//     maxWidth: '600px',
//     margin: '0 auto',
//   },
//   featureItem: {
//     background: 'linear-gradient(to right, #d3cce3, #e9e4f0)',
//     padding: '1rem',
//     borderRadius: '1rem',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     color: '#2d3748',
//     fontWeight: '500',
//     fontSize: '1.05rem',
//     transition: 'transform 0.3s ease',
//   },
// };

// // Keyframe animations using inline <style>
// const Animations = () => (
//   <style>
//     {`
//     @keyframes fadeIn {
//       from { opacity: 0 }
//       to { opacity: 1 }
//     }

//     @keyframes slideInTop {
//       from { transform: translateY(-40px); opacity: 0 }
//       to { transform: translateY(0); opacity: 1 }
//     }

//     @keyframes fadeInUp {
//       from { transform: translateY(20px); opacity: 0 }
//       to { transform: translateY(0); opacity: 1 }
//     }
//   `}
//   </style>
// );

// const Home = () => {
//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     window.location.href = "/";
//   };

//   return (
//     <>
//       <Animations />
//       <div style={styles.wrapper}>
//         <h1 style={styles.title}>🌈 Welcome to CodeCracker</h1>
//         <p style={styles.description}>
//           Learn to code the colorful way – interactive subtitles, gamified quizzes, funny concepts, and smart tech.
//         </p>

//         <div style={styles.buttonGroup}>
//           <Link to="/learn" style={styles.ctaButton}>🚀 Start Learning</Link>
//           <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
//         </div>

//         <section style={styles.featuresSection}>
//           <h2 style={styles.featuresTitle}>✨ Key Highlights</h2>
//           <ul style={styles.featureList}>
//             <li style={styles.featureItem}>📘 Interactive subtitle-based coding videos</li>
//             <li style={styles.featureItem}>🧠 Click words to get real-time definitions</li>
//             <li style={styles.featureItem}>😂 Laugh with nonsense-mode funny explanations</li>
//             <li style={styles.featureItem}>🛠️ Full MERN stack (React + Node + MongoDB)</li>
//             <li style={styles.featureItem}>📱 Fully mobile responsive and animated</li>
//           </ul>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // make sure ThemeContext is set up
import './Home.css'

const tips = [
  "🧠 Tip: Use meaningful variable names – `totalPrice` > `tp`.",
  "💡 Tip: Learn by building small projects, not just watching videos.",
  "🚀 Tip: Master JavaScript array methods – they’re powerful!",
  "🔍 Tip: Debug with `console.log()` and breakpoints like a pro.",
  "🧪 Tip: Break your code into small, testable functions.",
];

const Home = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <div className={`home-wrapper ${darkMode ? "dark" : ""}`}>
      <header className="hero">
        <h1 className="title">🚀 Welcome to CodeCracker</h1>
        <p className="description">
          Learn to code through subtitles, interactivity, fun visuals, and real-world examples.
        </p>
        <div className="buttons">
          <Link to="/learn" className="btn cta">Start Learning</Link>
          <button onClick={handleLogout} className="btn logout">Logout</button>
          <button onClick={toggleTheme} className="btn toggle">
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
          {/* <Link to="/leaderboard" className="btn nav">🏆 Leaderboard</Link>
          <Link to="/profile" className="btn nav">👤 Profile</Link> */}
        </div>
      </header>

      <section className="features">
        <h2>✨ Features</h2>
        <ul>
          <li>📘 Subtitle-based coding tutorials</li>
          <li>🧠 Clickable words with definitions</li>
          <li>😂 Funny explanations to keep learning fun</li>
          <li>🛠️ Fullstack with React, Node.js, MongoDB</li>
        </ul>
      </section>

      <footer className="tip-box">
        <p>{tip}</p>
      </footer>
    </div>
  );
};

export default Home;
