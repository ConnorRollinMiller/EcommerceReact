const pool = require('../db');

module.exports = {
   submitOrder: (req, res, next) => {
      // console.log('SUBMIT ORDER', req.body);

      let newOrder = req.body.newOrder;

      pool.getConnection((err, connection) => {
         const queryString = 'INSERT INTO Orders SET ?';

         connection.query(queryString, newOrder, (err, results) => {
            connection.release();

            if (err)
               return res.status(400).json({
                  success: false,
                  message: err
               });
            if (results.length === 0)
               return res.status(200).json({
                  success: false,
                  message: 'Order Failed To Submit.'
               });

            // console.log(results);

            newOrder = {
               OrderId: results.insertId,
               ...newOrder
            };

            // res.status(201).json({
            //    success: true,
            //    message: 'Order Details Successfully Submitted.',
            //    newOrder: newOrder
            // });

            req.body.newOrder = newOrder;

            next();
         });
      });
   },

   submitOrderDetails: (req, res, next) => {
      // console.log(req.body);

      let newOrderDetails = req.body.newOrderDetails;

      const orderId = req.body.newOrder.OrderId;

      pool.getConnection((err, connection) => {
         const queryString = 'INSERT INTO OrderDetails SET ?';

         newOrderDetails.forEach(item => {
            connection.query(
               queryString,
               { OrderId: orderId, ...item },
               (err, results) => {
                  if (err)
                     return res.status(200).json({
                        success: false,
                        message: err
                     });
                  if (results.length === 0)
                     return res.status(200).json({
                        success: false,
                        message: 'Order Details Failed To Submit.'
                     });

                  // console.log(results);

                  newOrderDetails = {
                     ...newOrderDetails,
                     OrderDetailsId: results.insertId
                  };
               }
            );
         });

         res.status(201).json({
            success: true,
            message: 'Order Details Successfully Submitted.',
            newOrder: req.body.newOrder,
            newOrderDetails: newOrderDetails
         });
      });
   }
};
