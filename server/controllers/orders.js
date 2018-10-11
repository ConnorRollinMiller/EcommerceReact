const Orders = require('../db').orders;
const OrderDetails = require('../db').orderDetails;
const db = require('../db');
const Sequelize = require('sequelize');
const nodemailer = require('../nodemailer');

module.exports = {

   submitNewOrder: (req, res, next) => {
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
         return {
            orderId: req.body.newOrder.orderId,
            ...orderDetails
         }
      });

      OrderDetails.bulkCreate(newOrderDetails)
         .then(orderDetails => {
            const itemsOrdered = req.body.itemsOrdered

            nodemailer(req.body.newOrder, itemsOrdered);
            res.status(201).json({ success: true, order: req.body.newOrder, orderDetails: orderDetails });
         })
         .catch(err => {
            res.status(500).json({ success: false, message: err });
         });
   },

   getOrderHistory: (req, res, next) => {
      const userId = req.params.userId;

      db.sequelize.query(`SELECT ordDet.orderId,
                                 ordDet.orderDetailId,
                                 ordDet.createdAt orderDate,
                                 shoe.shoeId,
                                 shoe.brand,
                                 shoe.model,
                                 shoe.colorway,
                                 shoe.price,
                                 shoe.imageFolderName
                           FROM Orders ord
                           JOIN OrderDetails ordDet
                              ON ord.orderId = ordDet.orderId
                           JOIN Shoes shoe
                              ON ordDet.shoeId = shoe.shoeId
                           WHERE ord.userId = ${ userId }
                           ORDER BY ordDet.orderId;`,
         { type: Sequelize.QueryTypes.SELECT })
         .then(results => {

            res.status(200).json({ success: true, orderHistory: results });

         })
         .catch(err => {
            res.status(500).json({ success: false, message: err });
         });
   }
}
