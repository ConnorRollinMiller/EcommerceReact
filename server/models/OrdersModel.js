const pool = require('../db');

module.exports = {
   submitOrder: (req, res, next) => {
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
      const insertValues = newOrderDetails.map(item => [ orderId, item.ShoeId, item.Quantity, item.Price ]);

      pool.getConnection((err, connection) => {
         const queryString = 'INSERT INTO OrderDetails (OrderId, ShoeId, Quantity, Price) VALUES ?';

         connection.query(queryString, [ insertValues ], (err, results) => {
            connection.release();

            if (err) {
               console.log('ERROR:', err);

               return res.status(200).json({
                  success: false,
                  message: err
               });
            }
            if (results.length === 0) {
               console.log('NO RESULTS LENGTH:', results);
               return res.status(200).json({
                  success: false,
                  message: 'Order Details Failed To Submit.'
               });
            }

            newOrderDetails = {
               ...newOrderDetails,
               OrderDetailsId: results.insertId
            };

            res.status(201).json({
               success: true,
               message: 'Order Details Successfully Submitted.',
               newOrder: req.body.newOrder,
               newOrderDetails: newOrderDetails
            });
         }
         );
      });
   }
};
