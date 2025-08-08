// ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import "./theme.css"; // global gradient styles

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  });

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const updated = !prev;
      localStorage.setItem("darkMode", updated);
      return updated;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easier access
export const useTheme = () => useContext(ThemeContext);
