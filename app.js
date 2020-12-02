const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")))
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT)