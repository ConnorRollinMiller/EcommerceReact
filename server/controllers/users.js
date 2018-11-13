const bcrypt = require('bcrypt');
const Users = require('../db').users;

const SALT_ROUNDS = 10;

module.exports = {

   hashPassword: (req, res, next) => {
      let { password } = req.body;

      bcrypt.hash(password, SALT_ROUNDS, (err, hash) => {

         if (err) {
            console.error(err);
            return res.status(200).json({
               success: false,
               message: 'Error salting password'
            });
         }

         console.log('HASHED PASS:', hash);

         req.body = { ...req.body, passwordHashed: hash };

         next();
      });
   },

   registerNewUser: (req, res, next) => {
      const {
         username,
         normalizedUsername,
         email,
         normalizedEmail,
         passwordHashed
      } = req.body;

      // console.log('REGISTER NEW USER');

      if (!username) {
         console.error('No UserName Provided.');
         return res.status(200).json({
            success: false,
            message: 'No UserName Provided.'
         });
      }
      if (!normalizedUsername) {
         console.error('No UserName Provided.');
         return res.status(200).json({
            success: false,
            message: 'No NormalizedUserName Provided.'
         });
      }
      if (!email) {
         console.error('No Email Provided.');
         return res.status(200).json({
            success: false,
            message: 'No Email Provided.'
         });
      }
      if (!normalizedEmail) {
         console.error('No Email Provided.');
         return res.status(200).json({
            success: false,
            message: 'No NormalizedEmail Provided.'
         });
      }
      if (!passwordHashed) {
         console.error(`The Password Wasn't Hashed.`);
         return res.status(200).json({
            success: false,
            message: 'There Is No Password Hash Provided.'
         });
      }

      Users.create({
         username: username,
         normalizedUsername: normalizedUsername,
         email: email,
         normalizedEmail: normalizedEmail,
         passwordHashed: passwordHashed
      })
         .then(newUser => {

            req.body.payload = { user: newUser.dataValues };

            next();

         }).catch(err => {
            console.error(err);
            res.status(200).json({ success: false, message: err.errors[ 0 ].message });
         });
   },

   userLogin: (req, res, next) => {
      const { normalizedUsername, password } = req.body;

      if (!normalizedUsername)
         return res.json({ success: false, message: 'No Normalized Username Was Given' });
      if (!password)
         return res.json({ success: false, message: 'No Password Was Given' });

      Users.findOne({
         where: {
            normalizedUsername: normalizedUsername
         }
      })
         .then(user => {
            if (!user) {
               return res.status(404).json({ success: false, message: 'Username Or Password Is Incorrect.' });
            }
            bcrypt.compare(password, user.dataValues.passwordHashed, (err, isMatch) => {
               // console.log('Password Is A Match', isMatch);
               if (err) {
                  console.error(err);
                  return res.status(500).json({ success: false, message: err });
               }
               if (!isMatch) return res.status(404).json({ success: false, message: 'Username Or Password Is Incorrect.' });


               req.body.payload = { user: user.dataValues };

               next()
            });
         })
         .catch(err => res.status(200).json({ success: false, message: err }));
   },

   updateAccountUsername: (req, res, next) => {
      const { userId } = req.params;
      const { username, normalizedUsername } = req.body;

      if (!userId)
         return res.json({ success: false, message: 'No User ID Was Given' });

      Users.findById(userId)
         .then(user => {
            if (!user) {
               res.status(404).json({ success: false, message: `No User With Id Of ${ userId } Was Found.` });
            } else if (user.normalizedUsername === normalizedUsername) {
               res.status(409).json({ success: false, message: 'New Username Can Not Match Current Username.' })
            } else {
               return user.updateAttributes({ username: username, normalizedUsername: normalizedUsername });
            }
         })
         .then(updatedUser => {

            req.body.payload = { user: updatedUser.dataValues }

            next();

         })
         .catch(err => {
            console.log('ERROR:', err);
            res.status(200).json({ success: false, message: err });
         });
   },

   updateAccountEmail: (req, res, next) => {
      const { userId } = req.params;
      const { email, normalizedEmail } = req.body;

      if (!userId)
         return res.json({ success: false, message: 'No User ID Was Given' });

      Users.findById(userId)
         .then(user => {
            if (!email) {
               res.status(404).json({ success: false, message: `No Email Was Given.` });
            } else if (user.normalizedEmail === normalizedEmail) {
               res.status(409).json({ success: false, message: 'New Email Can Not Match Current Email.' })
            } else {
               return user.updateAttributes({ email: email, normalizedEmail: normalizedEmail });
            }
         })
         .then(updatedUser => {
            req.body.payload = { user: updatedUser.dataValues }
            next();
         })
         .catch(err => {
            console.log('ERROR:', err);
            res.status(200).json({ success: false, message: err });
         });
   },

   updateAccountPassword: (req, res, next) => {
      const { userId } = req.params;
      const { currentPassword, newPassword } = req.body;

      if (!userId)
         return res.json({ success: false, message: 'No User ID Was Given' });
      if (!currentPassword)
         return res.status(404).json({ success: false, message: `No Current Password Was Given.` });
      if (!newPassword)
         return res.status(404).json({ success: false, message: `No New Password Was Given.` });

      Users.findById(userId)
         .then(user => {
            bcrypt.compare(currentPassword, user.dataValues.passwordHashed, (err, result) => {
               if (err) {
                  console.log(err);
                  return res.status(500).json({ success: false, message: err });
               }
               if (!result)
                  return res.status(404).json({ success: false, message: `Passwords Don't Match!` });

               bcrypt.hash(newPassword, SALT_ROUNDS, (err, hashedPass) => {
                  if (err) {
                     console.error(err);
                     return res.status(500).json({ success: false, message: err });
                  }

                  user.updateAttributes({ passwordHashed: hashedPass });

                  req.body.payload = { user: user.dataValues }

                  next();

               });
            });
         })
         .catch(err => {
            console.log('ERROR:', err);
            res.status(500).json({ success: false, message: err });
         });
   }
}
