const express = require("express");
const router = express.Router();

// Get the total P/L for that day
router.get("/:date", (req, res) => {
  // Write logic here
  res.send("get P / L for day");
});

// Get the total P/L for that month
router.get("/month", (req, res) => {
  // Write logic here
  res.send("get P / L for month");
});

module.exports = router;
