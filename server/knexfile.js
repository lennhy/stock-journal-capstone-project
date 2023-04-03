require("dotenv").config();

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: process.env.USER,
    password: process.env.STOCK_JOURNAL_PASSWORD,
    database: process.env.STOCK_JOURNAL_DB,
  },
});
