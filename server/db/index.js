const mysql = require('mysql');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'ReactEcommerceApp'
});

module.exports = pool;