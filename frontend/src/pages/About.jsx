import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-wrapper">
      <section className="about-section">
        <h1 className="about-h1">👋 About CodeCracker</h1>
        <p className="about-p">
          CodeCracker is an interactive learning platform designed to make coding fun, visual, and easy to understand — especially for beginners.
        </p>
        <p className="about-p">
          We blend subtitles, clickable definitions, real-world examples, and humor to help you learn JavaScript, React, Node.js, MongoDB, and more!
        </p>
        <p className="about-p">
          Whether you're a complete newbie or looking to sharpen your skills, this platform has something for you.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-h2">🧑‍💻 Who Built This?</h2>
        <p className="about-p">
          Built by passionate developers who believe that learning should never be boring. We’re building tools that explain tough concepts with clarity and creativity.
        </p>
      </section>
    </div>
  );
};

export default About;
