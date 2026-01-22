const express = require("express");
const router = express.Router();

let tickets = [];

router.post("/add", (req, res) => {
  tickets.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(tickets);
});

module.exports = router;