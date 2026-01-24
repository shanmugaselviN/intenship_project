const express = require("express");
const router = express.Router();

let fertilizers = [];

router.post("/add", (req, res) => {
  fertilizers.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(fertilizers);
});

module.exports = router;