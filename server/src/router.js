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

// Get items from a table
router.get("/:table", (req, res) => {
  const table = req.params.table;
  con.query(`SELECT * FROM ${table}`, function (error, results) {
    if (error) throw error;
    res.json(results);
  });
});

// Add item to table
//TODO

// Update item in table
//TODO

// Delete item from table
//TODO

module.exports = router;
