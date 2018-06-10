const connection = require('../db');

module.exports = {
	getAllShoes: (res) => {
		connection.query('SELECT * FROM Shoes', (err, results) => {
			if (err) return console.log(`ERROR: ${ err }`);
			res.send(results);
		});
	},

	getShoeById: (id, res) => {
		connection.query('SELECT * FROM Shoes WHERE ShoeId=' + id, (err, results) => {
			if (err) return console.log(`ERRROR: ${ err }`);

			for (let i in results) {
				return res.send(results[ i ]);
			}
		});
	}
}