import React, { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Ask backend to make a quiz
  async function requestQuiz(topic = "JavaScript basics", difficulty = "easy") {
    try {
      const res = await fetch("http://localhost:5000/api/chatbot/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, difficulty }),
      });
      const q = await res.json();
      setQuiz(q);
      setScore(null);
    } catch (err) {
      console.error("Error fetching quiz:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠ Could not get quiz right now." },
      ]);
    }
  }

  // Grade selected answer
  async function gradeAnswer(userAnswerIndex) {
    if (!quiz) return;

    try {
      const res = await fetch("http://localhost:5000/api/chatbot/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...quiz, userAnswerIndex }),
      });

      const data = await res.json();
      setScore(
        `${data.correct ? "✅ Correct!" : "❌ Wrong."} ${
          data.explanation || ""
        }`
      );
      setQuiz(null);
    } catch (err) {
      console.error("Error grading answer:", err);
      setScore("⚠ Could not check your answer.");
    }
  }

  // Handle message send
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    if (input.toLowerCase().includes("quiz")) {
      await requestQuiz("JavaScript basics", "easy");
    } else {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "🤖 Let’s learn together!" },
      ]);
    }
  };

  return (
    <div className={`chatbot-container ${darkMode ? "dark" : ""}`}>
      <div className="chatbot-header">
        <h1>💬 E-Learn Chatbot</h1>
        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* 🎯 Generate Quiz Button */}
      <button
        className="quick-quiz"
        onClick={() => requestQuiz("JavaScript basics", "easy")}
      >
        🎯 Generate Quiz
      </button>

      {quiz && (
        <div className="quiz-box">
          <h3>{quiz.question}</h3>
          {quiz.options.map((opt, i) => (
            <button key={i} onClick={() => gradeAnswer(i)}>
              {opt}
            </button>
          ))}
        </div>
      )}

      {score && <p className="score">{score}</p>}

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message or 'quiz'"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
