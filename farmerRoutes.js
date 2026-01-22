const express = require("express");
const router = express.Router();

let farmers = [];

router.post("/add", (req, res) => {
  farmers.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(farmers);
});

module.exports = router;