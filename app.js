const express = require("express");
const path = require("path");

const app = express();

// Serve static files (CSS)
app.use(express.static(path.join(__dirname, "views")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/sharks", (req, res) => {
    res.send("<h1>🦈 Sharks are awesome!</h1>");
});

// IMPORTANT: bind to 0.0.0.0 for ECS
const PORT = 8080;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
