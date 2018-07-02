const router = require('express').Router();
const OrdersModel = require('../models/OrdersModel');

router.route('/').post(OrdersModel.submitOrder, OrdersModel.submitOrderDetails);

module.exports = router;
