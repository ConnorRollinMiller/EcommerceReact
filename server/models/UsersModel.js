const pool = require('../db');
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
   hashPassword: (req, res, next) => {
      let { Password } = req.body;

      bcrypt.hash(Password, saltRounds, (err, hash) => {

         if (err)
            return res.status(200).json({
               success: false,
               message: err
            });

         console.log('HASHED PASS:', hash);

         req.body = { ...req.body, PasswordHash: hash };

         next();
      });
   },

   userRegister: (req, res, next) => {
      const {
         UserName,
         NormalizedUserName,
         Email,
         NormalizedEmail,
         PasswordHash
      } = req.body;

      if (!UserName) {
         console.error('No UserName Provided.');
         return res.status(200).json({
            success: false,
            message: 'No UserName Provided.'
         });
      }
      if (!NormalizedUserName) {
         console.error('No UserName Provided.');
         return res.status(200).json({
            success: false,
            message: 'No NormalizedUserName Provided.'
         });
      }
      if (!Email) {
         console.error('No Email Provided.');
         return res.status(200).json({
            success: false,
            message: 'No Email Provided.'
         });
      }
      if (!NormalizedEmail) {
         console.error('No Email Provided.');
         return res.status(200).json({
            success: false,
            message: 'No NormalizedEmail Provided.'
         });
      }
      if (!PasswordHash) {
         console.error(`The Password Wasn't Hashed.`);
         return res.status(200).json({
            success: false,
            message: 'There Is No Password Hash Provided.'
         });
      }

      const newUser = {
         UserName: UserName,
         NormalizedUserName: NormalizedUserName,
         Email: Email,
         NormalizedEmail: NormalizedEmail,
         PasswordHash: PasswordHash
      };

      pool.getConnection((err, connection) => {

         if (err)
            return res.status(200).json({
               success: false,
               message: err
            });

         const queryString = 'SELECT * FROM Users WHERE NormalizedUserName=?';

         connection.query(queryString, [ NormalizedUserName ], (err, results) => {
            if (err)
               return res.status(200).json({
                  success: false,
                  message: err
               });
            if (results.length > 0)
               return res.status(200).json({
                  success: false,
                  message: 'User Name Already In Use. Please Try Again.'
               });

            const queryString = 'INSERT INTO Users SET ?';

            connection.query(queryString, newUser, (err, results) => {
               connection.release();
               if (err) {
                  if (!err.errno) {
                     console.log(err);
                     return res.status(200).json({
                        success: false,
                        message: err
                     });
                  }
                  if (err.errno === 1062) {
                     console.error(`ERROR: ${ err }`);
                     return res.status(200).json({
                        success: false,
                        message: 'Email Already In Use.'
                     });
                  }

                  res.status(200).json({
                     success: false,
                     message: err
                  });
               }

               console.log('REGISTER SUCCESS:', results);

               const returnUser = {
                  UserId: results.insertId,
                  UserName: newUser.UserName,
                  Email: newUser.Email
               };

               // res.status(200).json({ success: true, user: returnUser, message: 'Registeration was successful!' });
               req.body.jwtData = returnUser;

               next();
            });
         })
      });
   },

   userLogin: (req, res, next) => {
      const { NormalizedUserName, Password } = req.body;

      pool.getConnection((err, connection) => {

         if (err)
            return res.status(200).json({
               success: false,
               message: err
            });

         const queryString = 'SELECT * FROM Users WHERE NormalizedUserName=?';

         connection.query(queryString, [ NormalizedUserName ], (err, results) => {
            connection.release();

            if (err) {
               console.error(err);
               return res.status(200).json({
                  success: false,
                  message: err
               });
            }
            if (results.length === 0) {
               console.error('USER DOESNT EXIST');
               return res.status(200).json({
                  success: false,
                  message: 'User Name Or Password Is Incorrect.'
               });
            }

            bcrypt.compare(Password, results[ 0 ].PasswordHash, (err, compareResponse) => {

               if (err)
                  return res.status(200).json({
                     success: false,
                     message: err
                  });
               if (!compareResponse)
                  return res.status(200).json({
                     success: false,
                     message: 'Passwords Did Not Match.'
                  });

               let user;
               for (let i in results) {
                  user = results[ i ];
               }

               const returnUser = {
                  UserId: user.UserId,
                  UserName: user.UserName,
                  Email: user.Email
               };

               req.body.jwtData = returnUser;
               next();
            });

         });
      });
   },

   updateAccountUserName: (req, res, next) => {
      const { UserId, UserName, NormalizedUserName } = req.body;

      pool.getConnection((err, connection) => {

         if (err)
            return res.status(200).json({
               success: false,
               message: err
            });

         const queryString = 'UPDATE Users SET UserName=?, NormalizedUserName=? WHERE UserId=?';

         connection.query(queryString, [ UserName, NormalizedUserName, UserId ], (err, result) => {
            connection.release();

            console.log('ERROR:', err);
            if (err) {
               if (err.errno === 1062) {
                  return res.status(200).json({
                     success: false,
                     message: 'Username Already In Use.'
                  })
               } else {
                  return res.status(200).json({
                     success: false,
                     message: err
                  });
               }
            }

            if (result.changedRows === 0)
               return res.status(200).json({
                  success: false,
                  message: 'No Records Updated.'
               });

            req.body.jwtData = {
               UserId: UserId,
               UserName: UserName,
            };

            next();
         });
      });
   },

   updateAccountEmail: (req, res, next) => {
      const { UserId, Email, NormalizedEmail } = req.body;

      pool.getConnection((err, connection) => {

         if (err)
            return res.status(200).json({
               success: false,
               message: err
            });

         const queryString = 'UPDATE Users SET Email=?, NormalizedEmail=? WHERE UserId=?';

         connection.query(queryString, [ Email, NormalizedEmail, UserId ], (err, result) => {
            connection.release();

            console.log('ERROR:', err);
            if (err) {
               if (err.errno === 1062) {
                  return res.status(200).json({
                     success: false,
                     message: 'Email Already In Use.'
                  })
               } else {
                  return res.status(200).json({
                     success: false,
                     message: err
                  });
               }
            }

            console.log(result);

            if (result.changedRows === 0)
               return res.status(200).json({
                  success: false,
                  message: 'No Records Updated.'
               });

            req.body.jwtData = {
               UserId: UserId,
               Email: Email
            };

            next();
         });
      });
   },

   updateAccountPassword: (req, res, next) => {
      const { UserId, CurrentPassword, NewPassword } = req.body;

      pool.getConnection((err, connection) => {
         if (err)
            return res.status(200).json({
               success: false,
               message: err
            });

         const queryString = 'SELECT * FROM Users WHERE UserId=?';

         connection.query(queryString, [ UserId ], (err, results) => {
            if (err)
               return res.status(200).json({
                  success: false,
                  message: err
               });
            if (results.length === 0)
               return res.status(200).json({
                  success: false,
                  message: 'No User Found.'
               });

            console.log('RESULTS:', results);

            bcrypt.compare(CurrentPassword, results[ 0 ].PasswordHash, (err, compareResponse) => {

               console.log('COMPARE RESPONSE:', compareResponse);

               if (err)
                  return res.status(200).json({
                     success: false,
                     message: err
                  });
               if (!compareResponse)
                  return res.status(200).json({
                     success: false,
                     message: 'Current Password Is Incorrect.'
                  });

               bcrypt.hash(NewPassword, saltRounds, (err, hash) => {
                  if (err)
                     return res.status(200).json({
                        success: false,
                        message: err
                     });

                  const updateQueryString = 'UPDATE Users SET PasswordHash=? WHERE UserId=?'

                  connection.query(updateQueryString, [ hash, UserId ], (err, result) => {
                     connection.release();

                     if (err)
                        return res.status(200).json({
                           success: false,
                           message: err
                        });
                     if (result.changedRows === 0)
                        return res.status(200).json({
                           success: false,
                           message: 'No Records Updated.'
                        });

                     res.status(200).json({
                        success: true
                     });
                  });
               });
            });
         });
      });
   }
};
