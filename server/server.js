const express = require("express");
const app = express();
const stockTotalsRoute = require("./routes/stockTotalsRoute");

app.use("/stockTotals", stockTotalsRoute);
app.get("/", function (req, res) {
  console.log(req.query);

  console.log(req.params);
  res.send("Welcome to  home");
});

app.get("/:date", function (req, res) {
  console.log(req.query);

  console.log(req.params);
  res.send("Welcome to  home");
});

app.listen(8080, function () {
  console.log("hello world");
});
