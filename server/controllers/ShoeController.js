const express = require('express');
const Shoes = require('../models/Shoes');
const router = express.Router();

const connection = require('../db');

router.route('/shoes')
	.get((req, res) => {
		// connection.query('SELECT * FROM Shoes', (err, results) => {
		// 	if (err) return console.log(`ERROR: ${ err }`);
		// 	res.send(results);
		// });
		Shoes.getAllShoes(res);
	});

router.route('/shoes/:shoeId')
	.get((req, res) => {
		const shoeId = req.params.shoeId;
		// console.log(shoeId);
		// connection.query('SELECT * FROM Shoes WHERE ShoeId=?', [ shoeId ], (err, results) => {
		// 	if (err) return console.log(`ERRROR: ${ err }`);
		// 	for (var i in results) {
		// 		res.send(results[ i ])
		// 	}
		// });
		Shoes.getShoeById(shoeId, res);
	});

module.exports = router;