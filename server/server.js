require("dotenv").config();
console.log(process.env);
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const path = require("path");

// app.use(express.static("public")); // set up our Express server to serve static files

const multer = require("multer");
// const upload = multer({ dest: "/Users/lennhypolite/local-cdn" });
// const upload = multer({ dest: "./public/data/uploads/" });

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/data/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

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

app.post("/upload", upload.single("filetoupload"), function (req, res) {
  console.log("run post upload ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  // req.file.originalname;
  console.log(req.file, req.body);
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
