const router = require('express').Router();
const ReviewsModel = require('../models/ReviewsModel.js');

router.route('/').post(ReviewsModel.postNewReview);

router.route('/:shoeId').get(ReviewsModel.getReviewsByShoeId);

module.exports = router;
