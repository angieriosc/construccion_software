const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'minecraft',
    password: 'cucu5352'
});

module.exports = pool.promise()