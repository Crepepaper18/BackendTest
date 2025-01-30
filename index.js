const express = require("express");

const app = express();
const PORT = 3000;

// Simple API
app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
