const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.PORT_DB,
  database: process.env.DATABASE,
});

module.exports = {
  query: (text, params) => {
    console.log("😂😂😂😂😂ssss", text, params)

    return pool.query(text, params)

  },
};
