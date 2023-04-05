/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("stock_transaction_files", function (table) {
    table.increments("id").primary();
    table.string("file_path").notNullable();
    table.timestamp("last_modified_date").notNullable();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.table("stock_transaction_files", function (table) {
    table.dropTable("stock_transaction_files");
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
