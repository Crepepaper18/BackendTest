const express = require("express");

const app = express();

// Use the port from environment variables, or default to 3000
const PORT = process.env.PORT || 3000;

// Simple API
app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
