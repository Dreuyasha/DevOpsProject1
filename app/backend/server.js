// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allows your React app to talk to this server
app.use(express.json()); // Lets you receive JSON in requests

// Test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend! 🎉" });
});

// Example of a POST route
app.post("/api/users", (req, res) => {
  const { name } = req.body;
  res.json({ message: `User ${name} created!` });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
