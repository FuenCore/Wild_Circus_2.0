const express = require("express");
const connection = require("../config");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * FROM history ORDER BY date ASC", (err, results) => {
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
  connection.query("INSERT INTO history SET ?", [formData], (err, results) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.json(results)
    }
  })
})

router.post('/', (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO hirstory SET ?", [formData], (err, results) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.json(results)
    }
  })
})

router.delete('/:id', (req,res) => {
  const idUrl = req.params.id
  connection.query("DELETE FROM history WHERE id = ?", [ idUrl ], (err) => {
    if(err){
      res.status(500).send(err)
    }
    else {
      res.status(200)
    }
  })
})



module.exports = router;
