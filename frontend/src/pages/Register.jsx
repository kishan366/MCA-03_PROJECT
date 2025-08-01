import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    // Show preview
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRegister = () => {
    if (!fullName || !email || !username || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simulate registration
    alert("Registration successful!");

    // Optionally store user info in localStorage
    const user = {
      fullName,
      email,
      username,
      profileImage: previewUrl, // or store file name
    };
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/login");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Create Account</h2>

        {previewUrl && (
          <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
        )}

        <input type="file" accept="image/*" onChange={handleImageChange} style={styles.fileInput} />

        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>

        <p style={styles.text}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Log in
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
    fontFamily: "system-ui, sans-serif",
    padding: "1rem",
  },
  card: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#111827",
  },
  input: {
    width: "90%",
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    border: "1px solid #cbd5e1",
  },
  fileInput: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    fontSize: "0.95rem",
  },
  imagePreview: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "0 auto 1rem auto",
    display: "block",
    border: "2px solid #e5e7eb",
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
};

export default Register;
