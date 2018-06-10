const express = require('express');
const Users = require('../models/Users');
const router = express.Router();

const connection = require('../db');

router.route('/register')
	.post(Users.doesUserExist, Users.passwordIsHashed, Users.userRegister);

router.route('/login')
	.post(Users.userLogin);

module.exports = router;