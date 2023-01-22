const express = require("express");
const mysql = require("mysql");
const router = express.Router();

//Db tables and columns
//TODO

//DB Connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bikeappDB",
  multipleStatements: true,
});

//Connect to DB
con.connect((err) => {
  if (err) {
    console.log("Error connecting to DB");
    return;
  }
  console.log("DB Connection established");
});

// Default page
router.get("/", function (req, res) {
  res.send("Hello");
});

// CREATE, READ, EDIT, DELETE functions

// Get items
//TODO

// Add item
//TODO

// Update item
//TODO

// Delete item
//TODO

module.exports = router;
