import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Learn.css";

function Learn() {
  const [showInfo, setShowInfo] = useState(false);

  const topics = [
    {
      title: "JavaScript Basics",
      description: "Learn variables, loops, functions, and more.",
      link: "/learn/video/javascript",
      videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
    {
      title: "React Fundamentals",
      description: "Understand components, props, state, and hooks.",
      link: "/learn/react",
    },
    {
      title: "Node.js & Express",
      description: "Build backends and APIs using Node.js & Express.",
      link: "/learn/node",
    },
    {
      title: "MongoDB & Mongoose",
      description: "Master NoSQL databases with MongoDB and Mongoose.",
      link: "/learn/mongodb",
    },
  ];

  return (
    <div className="learn-container">
      <h1 className="learn-title">📘 Learn with Fun</h1>

      <p className="learn-subtitle" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? "🔽" : "▶️"} Pick a topic to dive into coding — with examples, videos, and interactive learning.
      </p>

      <div
        className="learn-extra-info"
        style={{
          maxHeight: showInfo ? "500px" : "0px",
          opacity: showInfo ? 1 : 0,
        }}
      >
        <p>
          This platform offers beginner-friendly and hands-on learning modules. Each topic includes tutorials, videos,
          and interactive code exercises to enhance your understanding of programming concepts.
        </p>
      </div>

      <div className="learn-grid">
        {topics.map((topic, index) => (
          <Link to={topic.link} key={index} className="learn-card">
            <h2 className="learn-card-title">{topic.title}</h2>
            <p className="learn-card-desc">{topic.description}</p>

            {topic.videoUrl && (
              <video controls muted className="learn-video">
                <source src={topic.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Learn;
