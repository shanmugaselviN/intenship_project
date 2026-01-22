const express = require("express");
const router = express.Router();

let warehouse = [];

router.post("/add", (req, res) => {
  warehouse.push(req.body);
  res.json({ success: true });
});

router.get("/all", (req, res) => {
  res.json(warehouse);
});

module.exports = router;