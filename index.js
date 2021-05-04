const express = require("express");
const app = express();
const PORT = 3004;
const bcrypt = require("bcrypt");

app.get("/profile", (req, res) => {
  res.send("Profile Page");
  console.log("Profile Page");
});

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
