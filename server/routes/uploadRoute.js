const express = require("express");
const router = express.Router();

// Get the file upload
router.post("/upload", (req, res) => {
  // Write logic here
  console.log("request here---");
  console.log(req);

  //   var form = new formidable.IncomingForm();
  //   form.parse(req, function (err, fields, files) {
  //     res.write("File uploaded");
  //     res.end();
  //   });
});

module.exports = router;
