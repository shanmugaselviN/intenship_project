const express = require("express");
const router = express.Router();

let users = [];

router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;
  users.push({ username, email, password });
  res.json({ success: true, message: "Signup successful" });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;