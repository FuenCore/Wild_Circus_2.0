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

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO clown SET ?", [formData], (err, results) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.json(results)
    }
  })
})

router.delete('/:id', (req,res) => {
  const idUrl = req.params.id
  connection.query("DELETE FROM clown WHERE id = ?", [ idUrl ], (err) => {
    if(err){
      res.status(500).send(err)
    }
    else {
      res.status(200)
    }
  })
})

module.exports = router;
