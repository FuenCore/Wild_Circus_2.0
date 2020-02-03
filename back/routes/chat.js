const express = require("express");
const connection = require('../config');
const router = express.Router();

router.get('/', (req, res) => {
    connection.query('SELECT * FROM chat', (err, results) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.json(results);
            console.log(results)
        }
    });
});

router.post('/', (req, res) => {
    const formData = req.body;
    connection.query("INSERT INTO chat SET ?", [formData], (err, results) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.json(results)
        }
    })
})

router.delete('/:id', (req, res) => {
    const idUrl = req.params.id;
    connection.query('DELETE FROM chat WHERE id = ?', [ idUrl ], (err) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200)
        }
    })
})

module.exports = router;