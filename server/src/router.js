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
  const limit = 25;
  const page = req.params.number < 0 ? 0 : req.params.number;
  const fromRow = page * limit;

  if (table === "stations") {
    con.query(
      `SELECT stations.station_fid, stations.station_nimi, stations.station_osoite,
      (SELECT COUNT(*) FROM journeys WHERE journeys.departure_station_id = stations.station_id) AS departed,
      (SELECT COUNT(*) FROM journeys WHERE journeys.return_station_id = stations.station_id) AS returned
      FROM stations ORDER BY stations.station_fid LIMIT ${fromRow}, ${limit}`,
      function (error, results) {
        if (error) throw error;
        res.json(results);
      }
    );
  } else {
    con.query(
      `SELECT * FROM ${table} LIMIT ${fromRow},${limit}`,
      function (error, results) {
        if (error) throw error;
        res.json(results);
      }
    );
  }
});

/**
 * Get singular item with full details by id
 */
router.get("/:table/:number", (req, res) => {
  const table = req.params.table;
  const id = req.params.number < 0 ? 0 : req.params.number;
  let idColumn = "";
  if (table === "stations") {
    idColumn = "station_fid";
  }
  con.query(
    `select * FROM ${table} WHERE ${idColumn}=${id}`,
    function (error, results) {
      if (error) throw error;
      res.json(results);
    }
  );
});

module.exports = router;
