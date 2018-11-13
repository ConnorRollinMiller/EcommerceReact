const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Users = require('../db').users;
const KEY = process.env.JWT_SECRET;

module.exports = {
   signToken: (req, res, next) => {
      const data = req.body.payload;

      console.log('PAYLOAD: ', data);

      jwt.sign(data, KEY, { expiresIn: '12h' }, (err, token) => {
         if (err) {
            console.error(err);
            return res.status(400).json({ success: false, message: err });
         }

         res.status(200).json({
            success: true,
            token: token,
            payload: data
         });
      });
   },
   verifyToken: (req, res, next) => {
      const token = req.body.token;

      jwt.verify(token, KEY, (err, decoded) => {
         if (err) {
            res.status(200).json({
               success: false,
               message: err
            });
         } else {
            console.log('DECODED', decoded);

            Users.findById(decoded.user.userId)
               .then(user => {

                  if (user.passwordHashed === decoded.user.passwordHashed && user.normalizedUsername === decoded.user.normalizedUsername) {
                     res.status(200).json({ success: true, user: user });
                  } else {
                     res.status(401).json({ success: false, message: `Username or Password didn't match` });
                  }

               })
               .catch(err => {
                  console.log('ERROR: ', err);
                  res.status(500).json({ success: false, message: err });
               });
         }
      });
   }
}
