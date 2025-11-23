import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not running"));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
      <h1>Vite + React + Node.js/Express</h1>
      <p>
        Message from backend: <strong>{message}</strong>
      </p>
      <p>Both servers are running at the same time! 🚀</p>
    </div>
  );
}

export default App;
