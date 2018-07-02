const router = require('express').Router();
const UsersModel = require('../models/UsersModel');
const Jwt = require('../models/JwtModel');

router
   .route('/register')
   .post(
      UsersModel.doesUserExist,
      UsersModel.passwordIsHashed,
      UsersModel.userRegister,
      Jwt.signToken
   );

router.route('/login').post(UsersModel.userLogin, Jwt.signToken);

module.exports = router;
