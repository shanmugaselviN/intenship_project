const express = require("express");
const router = express.Router();

let machines = [];

router.post("/add", (req, res) => {
  machines.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(machines);
});

module.exports = router;