const express = require("express");
const connection = require("../config");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.json(results);
      console.log(results)
    }
  });
});



router.put('/update/:id', (req, res) => {
  const idUrl = req.params.id;
  const { password, ...formData} = req.body;
  if(password) {
    let hash = bcrypt.hashSync(password, 10)
  connection.query("UPDATE user SET pass = ?, ? WHERE id = ?", [ hash, formData, idUrl], (err) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.sendStatus(200);
    }
  }) 
} else {
  connection.query('UPDATE user SET ? WHERE id = ? AND NOT pass=""', [formData, idUrl], (err, results) => {
    if(err) {
      res.status(500).send(err)
    } else {
      res.sendStatus(200)
    }
  })
}
});

router.delete('/:id', (req,res) => {
  const idUrl = req.params.id
  connection.query("DELETE FROM user WHERE id = ?", [ idUrl ], (err) => {
    if(err){
      res.status(500).send(err)
    }
    else {
      res.status(200)
    }
  })
})



module.exports = router;
