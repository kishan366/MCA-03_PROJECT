import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./Glossary.css";

const glossaryData = [
  { term: "Variable", definition: "A container for storing data values." },
  { term: "Function", definition: "A block of code designed to perform a specific task." },
  { term: "Component", definition: "Reusable UI block in React." },
  { term: "State", definition: "Internal data that determines how a component renders & behaves." },
  { term: "Props", definition: "Inputs passed to components to configure or customize them." },
  { term: "Hook", definition: "Functions like useState or useEffect to add functionality to components." },
];

function Glossary() {
  const { darkMode } = useTheme(); // unified theme usage

  return (
    <div className={`glossary-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="glossary-title">📚 Developer Glossary</h1>
      <p className="glossary-subtitle">
        Quick definitions for common terms in development.
      </p>

      <div className="glossary-grid">
        {glossaryData.map((item, index) => (
          <div key={index} className="glossary-card">
            <h3 className="glossary-card-title">{item.term}</h3>
            <p className="glossary-card-desc">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
