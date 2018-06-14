const express = require('express');
const ShoesModel = require('../models/ShoesModel');
const router = express.Router();

router.route('/')
	.get(ShoesModel.getAllShoes);

router.route('/:shoeId')
	.get(ShoesModel.getShoeById);

module.exports = router;