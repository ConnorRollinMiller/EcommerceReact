const router = require('express').Router();

const shoesController = require('../controllers/shoes');
const usersController = require('../controllers/users');
const jwtController = require('../controllers/jwt');
const ordersController = require('../controllers/orders');
const reviewsController = require('../controllers/reviews');

router.route('/jwt/verify')
   .post(jwtController.verifyToken);

router.route('/shoes')
   .get(shoesController.getAllShoes);

router.route('/shoes/:shoeId')
   .get(shoesController.getShoeById);

router.route('/users/register')
   .post(
      usersController.hashPassword,
      usersController.registerNewUser,
      jwtController.signToken
   );

router.route('/users/login')
   .post(
      usersController.userLogin,
      jwtController.signToken
   );

router.route('/users/username/:userId')
   .put(
      usersController.updateAccountUsername,
      jwtController.signToken
   );

router.route('/users/email/:userId')
   .put(
      usersController.updateAccountEmail,
      jwtController.signToken
   );

router.route('/users/password/:userId')
   .put(
      usersController.updateAccountPassword,
      jwtController.signToken
   );

router.route('/orders')
   .post(
      ordersController.submitNewOrder,
      ordersController.submitNewOrderDetails
   );

router.route('/reviews')
   .post(reviewsController.postNewReview);

router.route('/reviews/:shoeId')
   .get(reviewsController.getReviewsByShoeId);

module.exports = router;