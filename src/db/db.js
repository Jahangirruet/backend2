const mysql = require("mysql2");
// import dotenv from "dotenv";

// dotenv.config();
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// export default connection;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
  });

const connectdb = async () => {
    try {
      await connection.connect();
      console.log("Connected to mysql database");
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = connectdb;
