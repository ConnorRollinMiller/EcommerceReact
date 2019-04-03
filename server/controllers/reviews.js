const Reviews = require('../db').reviews;
const db = require('../db');
const Sequelize = require('sequelize');

module.exports = {

   getReviewsByShoeId: (req, res, next) => {
      const shoeId = req.params.shoeId;

      db.sequelize.query(`SELECT Reviews.reviewId,
                                 Reviews.reviewText,
                                 Reviews.rating,
                                 Reviews.createdAt,
                                 Users.username
                           FROM Reviews
                           JOIN Users
                              On Reviews.userId = Users.userId
                           WHERE shoeId = :shoeId;`,
         {
            replacements: { shoeId: shoeId },
            type: Sequelize.QueryTypes.SELECT
         })
         .then(reviews => {
            if (!reviews)
               return res.status(200).json({ success: false, message: 'No Reviews Were Found.' });

            res.status(200).json({ success: true, reviews: reviews });
         })
         .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: err });
         });
   },

   postNewReview: (req, res, next) => {

      const {
         shoeId,
         userId,
         username,
         rating,
         reviewText
      } = req.body

      if (!userId)
         return res.status(200).json({
            success: false,
            message: 'No User ID Given.'
         });
      if (!username)
         return res.status(200).json({
            success: false,
            message: 'No User Name Given.'
         });
      if (!shoeId)
         return res.status(200).json({
            success: false,
            message: 'No Shoe Id Given.'
         });
      if (!rating)
         return res.status(200).json({
            success: false,
            message: 'No Rating Given.'
         });
      if (!reviewText)
         return res.status(200).json({
            success: false,
            message: 'No Review Text Given.'
         });

      Reviews.create(req.body)
         .then((newReview) => {

            newReview = {
               username: username,
               ...newReview.dataValues
            };

            res.status(201).json({ success: true, newReview });
         })
         .catch((err) => {
            console.error(err);
            res.status(500).json({ success: false, message: err });
         });
   }
}