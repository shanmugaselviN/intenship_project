const express = require("express");
const router = express.Router();

let farmmaps = []; // initially empty, or load from JSON if needed

// Add new farm map
router.post("/add", (req, res) => {
  farmmaps.push(req.body);
  res.json({ success: true });
});

// Get all farm maps
router.get("/all", (req, res) => {
  res.json(farmmaps);
});

module.exports = router;