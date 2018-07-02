const pool = require('../db');

module.exports = {
	getAllShoes: (req, res, next) => {
		pool.getConnection((err, connection) => {

			if (err) return res.status(400).json({ success: false, message: err });

			connection.query('SELECT * FROM Shoes', (err, results) => {

				connection.release();

				if (err) return res.status(400).json({ success: false, message: err });

				res.status(200).json({
					success: true,
					shoes: results
				});
			});
		})
	},

	getShoeById: (req, res, next) => {
		const shoeId = req.params.shoeId;
		console.log(req.params);

		pool.getConnection((err, connection) => {

			if (err) return res.status(400).json({ success: false, message: err });


			const queryString = 'SELECT * FROM Shoes WHERE ShoeId = ?';
			connection.query(queryString, [ shoeId ], (err, results) => {

				connection.release();

				if (err) return res.status(400).json({ success: false, message: err });

				let shoe;

				for (let i in results) {
					shoe = results[ i ];
				}

				return res.status(200).json({
					success: true,
					shoe: shoe
				});

			});
		});
	}
}