const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to  home");
});
app.listen(8080, function () {
  console.log("hello world");
});
