const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "hd.214375",
  host: "localhost",
  port: 5432,
  database: "cocktaildb",
});

module.exports = pool;
