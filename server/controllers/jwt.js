const jwt = require('jsonwebtoken');
const KEY = process.env.JWT_SECRET;

module.exports = {
   signToken: (req, res, next) => {
      const data = req.body.user;

      jwt.sign({ data: data }, KEY, { expiresIn: '12h' }, (err, token) => {
         if (err) return res.status(400).send(err);

         res.status(200).json({
            success: true,
            user: data,
            token: token
         });
      });
   },
   verifyToken: (req, res, next) => {
      const token = req.body.token;

      jwt.verify(token, KEY, (err, decoded) => {
         if (err) {
            res.status(201).json({
               success: false,
               message: err
            });
         } else {
            res.status(200).json({
               success: true,
               user: decoded.data
            });
         }
      });
   }
}
