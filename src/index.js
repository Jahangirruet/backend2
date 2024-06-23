const express = require("express");
const app = express();
const port = 3000;

const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

async function connectdb() {
  try {
    await connection.connect();
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
}
connectdb();
