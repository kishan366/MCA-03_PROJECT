import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import { FaUser, FaLock } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") navigate("/home");
  }, [navigate]);

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Please enter username and password");
    }
  };

  return (
    <div style={styles.page}>
      {/* Background circles */}
      <div style={styles.yellowCircle}></div>
      <div style={styles.purpleCircle}></div>

      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleLogin}>
          Log in <HiArrowRight style={{ marginLeft: "0.5rem" }} />
        </button>

        {/* Register Link */}
        <p style={styles.text}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "sans-serif",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
    zIndex: 1,
    minWidth: "300px",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1.5rem",
    color: "#111827",
  },
  input: {
    width: "90%",
    padding: "0.8rem 1rem",
    fontSize: "1rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #cbd5e1",
  },
  button: {
    width: "100%",
    background: "#facc15",
    color: "#111827",
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  text: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    color: "#555",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "bold",
  },
  yellowCircle: {
    position: "absolute",
    top: "10%",
    left: "60%",
    width: "60px",
    height: "60px",
    backgroundColor: "#facc15",
    borderRadius: "50%",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
  purpleCircle: {
    position: "absolute",
    top: "25%",
    left: "68%",
    width: "25px",
    height: "25px",
    backgroundColor: "#c084fc",
    borderRadius: "50%",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  },
};

export default Login;
