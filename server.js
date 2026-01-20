const express = require("express");
const bodyParser = require("body-parser");
const chatHandler = require("./api/chat");

const app = express();
app.use(bodyParser.json());

app.post("/api/chat", chatHandler);

const PORT = 3001; // can be any port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
