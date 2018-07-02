const pool = require('../db');
const passwordHash = require('password-hash');

module.exports = {
   doesUserExist: async (req, res, next) => {
      const { NormalizedUserName } = req.body;

      pool.getConnection((err, connection) => {
         const queryString =
            'SELECT * FROM `Users` WHERE `NormalizedUserName` = ?';

         connection.query(queryString, NormalizedUserName, (err, results) => {
            connection.release();

            if (err) {
               console.log(err);
               return res.status(200).json({
                  success: false,
                  message: err.response
               });
            } else if (results.length > 0) {
               console.log('USER EXISTS:', results);
               return res.status(200).json({
                  success: false,
                  message: 'User Name Already In Use. Please Try Again.'
               });
            }

            next();
         });
      });
   },

   passwordIsHashed: (req, res, next) => {
      let { Password } = req.body;

      const hashed = passwordHash.generate(Password);
      const isPasswordHashed = passwordHash.isHashed(hashed);

      if (!isPasswordHashed)
         return res.status(200).json({
            success: false,
            message: `Password Wasn't Hashed.`
         });

      req.body = { ...req.body, PasswordHash: hashed };

      next();
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
               } else if (err.errno === 1062) {
                  console.error(`ERROR: ${err}`);
                  return res.status(200).json({
                     success: false,
                     message: 'Email Already In Use.'
                  });
               } else {
                  return res.status(200).json({
                     success: false,
                     message: err
                  });
               }
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
      });
   },

   userLogin: (req, res, next) => {
      const { UserName, Password } = req.body;

      console.log(UserName.toUpperCase(), Password);

      pool.getConnection((err, connection) => {
         if (err)
            return res.status(200).json({
               success: false,
               message: err
            });

         const queryString =
            'SELECT * FROM `Users` WHERE `NormalizedUserName` = ?';
         connection.query(
            queryString,
            [UserName.toUpperCase()],
            (err, results) => {
               connection.release();

               if (err) {
                  console.error(err);

                  res.status(200).json({
                     success: false,
                     message: err
                  });
               } else if (results.length === 0) {
                  console.error('USER DOESNT EXIST');
                  res.status(200).json({
                     success: false,
                     message: 'User Name Or Password Is Incorrect.'
                  });
               } else {
                  const isPassword = passwordHash.verify(
                     Password,
                     results[0].PasswordHash
                  );

                  if (!isPassword) {
                     console.error('Password INCORRECT');

                     res.status(200).json({
                        success: false,
                        message: 'User Name Or Password Is Incorrect.'
                     });

                     return;
                  }

                  let user;

                  for (let i in results) {
                     user = results[i];
                  }

                  const returnUser = {
                     UserId: user.UserId,
                     UserName: user.UserName,
                     Email: user.Email
                  };

                  // res.status(200).json({ user: returnUser });
                  req.body.jwtData = returnUser;

                  next();
               }
            }
         );
      });
   }
};
