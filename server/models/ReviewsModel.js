const pool = require('../db');

module.exports = {
   getReviewsByShoeId: (req, res, next) => {
      const shoeId = req.params.shoeId;
      const queryString = 'SELECT * FROM Reviews WHERE ShoeId = ?';

      console.log('SHOEID:', shoeId);

      pool.getConnection((err, connection) => {
         if (err)
            return res.status(400).json({
               success: false,
               message: err
            });

         connection.query(queryString, [shoeId], (err, results) => {
            connection.release();

            if (err)
               return res.status(400).json({
                  success: false,
                  message: err
               });
            if (results.length === 0)
               return res.status(200).json({
                  success: false,
                  message: 'No Reviews Found.'
               });

            res.status(200).json({
               success: true,
               reviews: results
            });
         });
      });
   },

   postNewReview: (req, res, next) => {
      let newReview = req.body;

      if (!newReview.UserName)
         return res.status(200).json({
            success: false,
            message: 'No User Name Given.'
         });
      if (!newReview.ShoeId)
         return res.status(200).json({
            success: false,
            message: 'No Shoe Id Given.'
         });
      if (!newReview.Rating)
         return res.status(200).json({
            success: false,
            message: 'No Rating Given.'
         });
      if (!newReview.ReviewDate)
         return res.status(200).json({
            success: false,
            message: 'No Review Date Given.'
         });
      if (!newReview.ReviewText)
         return res.status(200).json({
            success: false,
            message: 'No Review Text Given.'
         });

      pool.getConnection((err, connection) => {
         if (err)
            return res.status(400).json({
               success: false,
               message: err
            });

         const queryString = 'INSERT INTO Reviews SET ?';

         connection.query(queryString, newReview, (err, results) => {
            connection.release();

            if (err)
               return res.status(400).json({
                  success: false,
                  message: err
               });
            if (results.length === 0)
               return res.status(200).json({
                  success: false,
                  message: 'Review Post Failed.'
               });

            console.log(results);

            newReview = {
               ...newReview,
               ReviewId: results.insertId
            };

            res.status(201).json({
               success: true,
               newReview: newReview,
               message: 'Post Successfully Posted.'
            });
         });
      });
   }
};
