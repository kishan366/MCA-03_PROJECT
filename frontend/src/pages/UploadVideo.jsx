import React, { useState } from "react";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [subtitles, setSubtitles] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoFile || !title || !topic) {
      alert("Please fill all fields and select a video.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("topic", topic);
    formData.append("video", videoFile);
    formData.append("subtitles", subtitles);

    try {
      setUploading(true);
      setMessage("");
      setIsError(false);

      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ " + data.message);
        setIsError(false);
        // Reset fields
        setTitle("");
        setTopic("");
        setVideoFile(null);
        setSubtitles("");
        document.getElementById("video-input").value = null;
      } else {
        setMessage("❌ Upload failed: " + data.message);
        setIsError(true);
      }
    } catch (err) {
      console.error("Upload error:", err);
      setMessage("❌ Upload failed: Network/server error");
      setIsError(true);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎬 Upload New Video</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="topic">
          Topic Name:
        </label>
        <input
          id="topic"
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. javascript"
          style={styles.input}
          required
        />

        <label style={styles.label} htmlFor="title">
          Video Title:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. JavaScript Basics"
          style={styles.input}
          required
        />

        <label style={styles.label} htmlFor="video-input">
          Video File:
        </label>
        <input
          id="video-input"
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          style={styles.input}
          required
        />
        {videoFile && <p style={styles.filename}>📁 Selected: {videoFile.name}</p>}

        <label style={styles.label} htmlFor="subtitles">
          Subtitles (Time + Text):
        </label>
        <textarea
          id="subtitles"
          value={subtitles}
          onChange={(e) => setSubtitles(e.target.value)}
          rows={5}
          placeholder={`Example:\n00:00 Welcome to JavaScript Basics\n00:05 Let’s learn about variables`}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button} disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Video"}
        </button>

        {message && (
          <p style={{ ...styles.message, color: isError ? "#dc2626" : "#16a34a" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f9fafb",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    color: "#1d4ed8",
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  form: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#ffffff",
    padding: "1.5rem",
    borderRadius: "1rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  label: {
    fontWeight: "600",
    color: "#1f2937",
  },
  input: {
    padding: "0.75rem",
    borderRadius: "0.5rem",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.75rem",
    borderRadius: "0.5rem",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
  },
  button: {
    backgroundColor: "#1d4ed8",
    color: "white",
    padding: "0.75rem",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    opacity: 1,
  },
  message: {
    textAlign: "center",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  filename: {
    fontSize: "0.9rem",
    color: "#4b5563",
  },
};

export default UploadVideo;
