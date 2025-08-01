import React from "react";

const glossaryData = [
  { term: "Variable", definition: "A container for storing data values." },
  { term: "Function", definition: "A block of code designed to perform a specific task." },
  { term: "Component", definition: "Reusable UI block in React." },
  { term: "State", definition: "Internal data that determines how a component renders & behaves." },
  { term: "Props", definition: "Inputs passed to components to configure or customize them." },
  { term: "Hook", definition: "Functions like useState or useEffect to add functionality to components." },
];

function Glossary() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📚 Developer Glossary</h1>
      <p style={styles.subtitle}>
        Quick definitions for common terms in development.
      </p>

      <div style={styles.grid}>
        {glossaryData.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{item.term}</h3>
            <p style={styles.cardDesc}>{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Inline Styles – Fully standalone, no external CSS
const styles = {
  container: {
    minHeight: "100vh",
    padding: "2rem 1rem",
    background: "#fff8dc",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: "bold",
    color: "#1d4ed8",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "2rem",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    maxWidth: "960px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #dbeafe",
    borderRadius: "1rem",
    padding: "1.25rem",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  cardTitle: {
    fontSize: "1.3rem",
    color: "#2563eb",
    marginBottom: "0.5rem",
    fontWeight: "600",
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#374151",
    lineHeight: "1.4",
  },
};

export default Glossary;
