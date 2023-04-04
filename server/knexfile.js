require("dotenv").config();
module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: process.env.STOCK_JOURNAL_USER,
    password: process.env.STOCK_JOURNAL_PASSWORD,
    database: process.env.STOCK_JOURNAL_DB,
    charset: "utf8",
  },
};
