const router = require('express').Router();

const Jwt = require('../models/JwtModel');

router.route('/verify').post(Jwt.verifyToken);

module.exports = router;
