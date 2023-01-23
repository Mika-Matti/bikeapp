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

/**
 * Get limited items from a table at a time depending on page number where page 1 => 1-25
 * Query is limited with a limit and a page value.
 * if limit is 25, then 25 rows are selected from database.
 * Each page displays a row of 25 items.
 * If page is 1, then the rows on that page start from page*limit = 1*25=25 and last row is 50.
 * First page is 0, meaning 0*25=0 brings rows from 1-25.
 */
router.get("/:table/page/:number", (req, res) => {
  const table = req.params.table;
  const page = req.params.number;
  const limit = 25;
  const fromRow = page * limit;
  con.query(
    `SELECT * FROM ${table} LIMIT ${fromRow},${limit}`,
    function (error, results) {
      if (error) throw error;
      res.json(results);
    }
  );
});

// Add item to table
//TODO

// Update item in table
//TODO

// Delete item from table
//TODO

module.exports = router;
