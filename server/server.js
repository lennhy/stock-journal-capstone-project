const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());

// app.use(express.static("public")); // set up our Express server to serve static files

const multer = require("multer");
// const upload = multer({ dest: "/Users/lennhypolite/local-cdn" });
const upload = multer({ dest: "./public/data/uploads/" });

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
  // console.log("upload server rotue running-----");
  // console.log(req.files);
  // // console.log(req.body);
  // // console.log(res.json(req.body));
  // // console.log(req.body);
  // // console.log(req.get("Content-Type"));
  // console.log(req.file);
  console.log("run post upload ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log(req.file, req.body);
});

app.listen(8080, function () {
  console.log("Running on port 8080");
});
