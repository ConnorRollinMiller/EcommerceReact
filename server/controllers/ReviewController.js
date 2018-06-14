const express = require('express');
const ReviewsModel = require('../models/ReviewsModel.js');
const router = express.Router();
const app = express();

router.route('/')
	.post(ReviewsModel.postNewReview);

router.route('/:shoeId')
	.get(ReviewsModel.getReviewsByShoeId);

module.exports = router;