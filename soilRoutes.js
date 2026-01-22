const express = require("express");
const router = express.Router();

let soilTests = [];

router.post("/add", (req, res) => {
  soilTests.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(soilTests);
});

module.exports = router;