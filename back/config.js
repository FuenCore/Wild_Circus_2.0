const mysql = require("mysql");
require('dotenv').config();

// const connection = mysql.createConnection({
//     host: process.env.HOST_CIRCUS,
//     user: process.env.USER_CIRCUS,
//     password: process.env.PW_CIRCUS,
//     database: process.env.DB_CIRCUS
// })

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "wild_circus"
})

module.exports = connection;