const express = require("express");
const router = express.Router();

let labours = [];

router.post("/add", (req, res) => {
  labours.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(labours);
});

module.exports = router;