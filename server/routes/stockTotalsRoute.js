const express = require("express");
const router = express.Router();

// Get the total P/L for that day
router.get("/", (req, res) => {
  //   res.send("get P / L for day");
  res.send("get P / L ");
});

// Get the total P/L for that month
// router.get("/", (req, res) => {
//   res.send("get P / L for month");
// });

module.exports = router;
