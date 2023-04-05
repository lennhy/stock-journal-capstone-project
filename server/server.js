require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const knex = require("knex")(require("./knexfile"));
// app.use(express.static("public")); // set up our Express server to serve static files
const multer = require("multer");
const csv = require("csvtojson");

// Customize multer storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/data/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const stockTotalsRoute = require("./routes/stockTotalsRoute");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  if (req.method === "GET") {
    console.log("get stock totals");
  }
  next();
});

// Now you can go to /stocktotals/:date or /stocktotals/month
app.use("/stocktotals", stockTotalsRoute); // Use app.use() to mount your stock totals router on to the path / foods

app.get("/", function (req, res) {
  knex
    .select("file_path", "file_name")
    .from("stock_transaction_files")
    .then((csvFilePath) => {
      // Construct the complete path to the file
      const path = csvFilePath[0].file_path + csvFilePath[0].file_name;
      console.log(path);
      csv()
        .fromFile(path)
        .then((jsonObj) => {
          // Return the response of the string
          res.json(jsonObj);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/upload", upload.single("filetoupload"), function (req, res) {
  console.log("run post upload ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(req.file, req.body);
  knex("stock_transaction_files")
    .insert({
      file_name: req.file.originalname,
      file_path: req.file.destination,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
