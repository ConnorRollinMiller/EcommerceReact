const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'ReactEcommerceApp'
});

module.exports = connection;