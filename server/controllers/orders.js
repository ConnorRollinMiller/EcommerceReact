const Orders = require('../models').orders;
const OrderDetails = require('../models').orderDetails;

module.exports = {

   submitNewOrder: (req, res, next) => {
      const {
         userId,
         firstName,
         lastName,
         country,
         state,
         city,
         address,
         zipCode,
         phone,
         email,
         total
      } = req.body.newOrder;

      Orders.create(req.body.newOrder)
         .then(newOrder => {
            req.body.newOrder = newOrder;
            next();
         })
         .catch(err => {
            res.status(500).json({ success: false, message: err });
         });
   },

   submitNewOrderDetails: (req, res, next) => {
      let newOrderDetails = req.body.newOrderDetails;

      newOrderDetails = newOrderDetails.map(orderDetails => {
         return { orderId: req.body.newOrder.orderId, ...orderDetails }
      });

      OrderDetails.bulkCreate(newOrderDetails)
         .then(orderDetails => {
            res.status(201).json({ success: true, order: req.body.newOrder, orderDetails: orderDetails })
         })
         .catch(err => {
            res.status(500).json({ success: false, message: err })
         });
   }
}
