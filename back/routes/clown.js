const express = require("express");
const connection = require("../config");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM clown", (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
      console.log(results)
    }
  });
});

router.get("/braqueur", (req, res) => {
  connection.query("SELECT * FROM clown WHERE role = 'Braqueur'", (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
      console.log(results)
    }
  });
});

router.get("/hackeur", (req, res) => {
  connection.query("SELECT * FROM clown WHERE role = 'Hackeur'", (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
      console.log(results)
    }
  });
});

router.get("/soldier", (req, res) => {
  connection.query("SELECT * FROM clown WHERE role = 'Clown de main'", (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
      console.log(results)
    }
  });
});

module.exports = router;