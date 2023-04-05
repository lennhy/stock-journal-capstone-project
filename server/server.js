require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const knex = require("knex")(require("./knexfile"));
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
  // Select the latest file upload
  knex
    // Get the latest addition to the table
    // MYSQL: select file_path, file_name from stock_transaction_files where (created_at) in (select max(created_at) from stock_transaction_files);    .select("file_path", "file_name")
    .select("file_path", "file_name")
    .orderBy("created_at", "desc")
    .limit("1")
    .from("stock_transaction_files")
    .then((csvFilePath) => {
      // Construct the complete path to the file
      const path = csvFilePath[0].file_path + csvFilePath[0].file_name;
      console.log(path);
      csv()
        .fromFile(path)
        .then((jsonObj) => {
          // Return the response as a json object
          res.send(jsonObj);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/upload", upload.single("filetoupload"), function (req, res) {
  // Add New file path and info to the database
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
