const express = require("express");
const app = express();
const port = 5000;
const connection = require("./config");
const api = require("./routes")

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  
app.use("/api", api);

app.listen(port, (err) => {
    if(err) {
    throw new Error(`Le serveur ne se lance pas chef ! ${err}`)
    }
    console.log(`Serveur lancé sur le port ${port} chef !`)
    });