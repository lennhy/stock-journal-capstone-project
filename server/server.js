const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
const formidable = require("formidable");
console.log("here---------formidable");
// console.log(formidable);
// app.use(express.static("public")); // set up our Express server to serve static files

const stockTotalsRoute = require("./routes/stockTotalsRoute");

app.use((req, res, next) => {
  if (req.method === "GET") {
    console.log("get stock totals");
  }
  next();
});

// Now you can go to /stocktotals/:date or /stocktotals/month
app.use("/stocktotals", stockTotalsRoute); // Use app.use() to mount your stock totals router on to the path / foods

app.get("/", function (req, res) {
  // console.log(req.query);
  // console.log(req.params);
  res.send("Welcome to  home");
});

app.post("/upload", function (req, res) {
  console.log("upload server rotue running");
  console.log(req);
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
