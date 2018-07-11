const router = require('express').Router();
const ShoesModel = require('../models/ShoesModel');

router.route('/')
   .get(ShoesModel.getAllShoes);

router.route('/:shoeId')
   .get(ShoesModel.getShoeById);

module.exports = router;
