const express = require('express');
const UsersModel = require('../models/UsersModel');
const router = express.Router();

const connection = require('../db');

router.route('/register')
	.post(UsersModel.doesUserExist, UsersModel.passwordIsHashed, UsersModel.userRegister);

router.route('/login')
	.post(UsersModel.userLogin);

module.exports = router;