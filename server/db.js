const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.PGHOST || "localhost",
  port: 5432,
  database: process.env.PGDATABASE,
});

module.exports = pool;
