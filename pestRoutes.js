const express = require("express");
const router = express.Router();

let pests = [];

router.post("/add", (req, res) => {
  pests.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(pests);
});

module.exports = router;