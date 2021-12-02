const mysql = require("mysql2");
const { dbConfig } = require("../config");

const pool = mysql.createPool(dbConfig);

module.exports = pool.promise();
