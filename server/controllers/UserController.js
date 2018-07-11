const router = require('express').Router();
const UsersModel = require('../models/UsersModel');
const Jwt = require('../models/JwtModel');

router.route('/update/username')
   .put(
      UsersModel.updateAccountUserName,
      Jwt.signToken
   );

router.route('/update/email')
   .put(
      UsersModel.updateAccountEmail,
      Jwt.signToken
   );

router.route('/update/password')
   .put(UsersModel.updateAccountPassword);

router.route('/register')
   .post(
      UsersModel.hashPassword,
      UsersModel.userRegister,
      Jwt.signToken
   );

router.route('/login')
   .post(
      UsersModel.userLogin,
      Jwt.signToken
   );

module.exports = router;
