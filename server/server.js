require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const knex = require("knex")(require("./knexfile"));
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
  res.header("Access-Control-Allow-Origin", "*");

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
  console.log(req.file, req.body);
  knex("stock_transaction_files")
    .insert({
      file_name: req.file.originalname,
      file_path: req.file.destination,
    })
    .then((suc) => {
      console.log(suc);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
