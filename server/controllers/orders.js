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
            console.log(newOrder);
            req.body.newOrder = newOrder;
            next();
         })
         .catch(err => {
            res.status(500).json({ success: false, message: err });
         });
   },

   submitNewOrderDetails: (req, res, next) => {
      const newOrderDetails = req.body.newOrderDetails;

      newOrderDetails = newOrderDetails.map(od => {
         return { orderId: req.body.newOrder.orderId, ...od }
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
