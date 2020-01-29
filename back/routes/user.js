const express = require("express");
const connection = require("../config");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
    }
  });
});


module.exports = router;
