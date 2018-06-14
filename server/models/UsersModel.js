const pool = require('../db');
const passwordHash = require('password-hash');

module.exports = {
	doesUserExist: async (req, res, next) => {
		const { UserName } = req.body;

		pool.getConnection((err, connection) => {
			const queryString = 'SELECT * FROM `Users` WHERE `NormalizedUserName` = ?';

			connection.query(queryString, [ UserName.toUpperCase() ], (err, results) => {

				connection.release();

				if (err) {
					console.log(err);
					return res.status(400).json({ message: err })
				} else if (results.length > 0) {
					console.log('USER EXISTS:', results);
					return res.status(400).json({ success: false, message: 'User Already Exists.' });
				}

				next();
			});
		})
	},

	passwordIsHashed: (req, res, next) => {

		let { Password } = req.body;

		const hashed = passwordHash.generate(Password);
		const isPasswordHashed = passwordHash.isHashed(hashed)

		if (!isPasswordHashed) return res.status(400).json({ success: false, message: `Hash Wasn't Verified` });

		req.body = { ...req.body, PasswordHash: hashed };

		next();
	},

	userRegister: (req, res) => {

		const { UserName, Email, PasswordHash } = req.body;

		if (UserName === '') {
			console.error('NO UserName PROVIDED.');
			return res.status(400).json({ success: false, message: 'No UserName Provided.' });
		} else if (Email === '') {
			console.error('NO Email PROVIDED.');
			return res.status(400).json({ success: false, message: 'No Email Provided.' });
		} else if (PasswordHash === '') {
			console.error('NO PasswordHash Provided.');
			return res.status(400).json({ success: false, message: 'No PasswordHash Provided.' });
		}

		const newUser = {
			UserName: UserName.trim(),
			NormalizedUserName: UserName.trim().toUpperCase(),
			Email: Email.trim(),
			PasswordHash: PasswordHash
		};

		pool.getConnection((err, connection) => {

			const queryString = 'INSERT INTO Users SET ?';
			connection.query(queryString, newUser, (err, results) => { // err, results, fields

				connection.release();

				if (err) {
					console.error(`ERROR: ${ err }`);
					return res.status(400).json({ success: false, message: err });
				}

				console.log('REGISTER SUCCESS:', results);

				const returnUser = {
					UserId: results.insertId,
					UserName: newUser.UserName,
					Email: newUser.Email
				}

				return res.status(200).json({ success: true, user: returnUser, message: 'Registeration was successful!' });
			});
		});
	},

	userLogin: (req, res) => {
		const { UserName, Password } = req.body;

		console.error(UserName.toUpperCase(), Password);

		pool.getConnection((err, connection) => {

			if (err) return res.status(400).json({ success: false, message: err });

			const queryString = 'SELECT * FROM `Users` WHERE `NormalizedUserName` = ?';
			connection.query(queryString, [ UserName.toUpperCase() ], (err, results) => {

				connection.release();

				if (err) {
					console.error(err);
					return res.status(400).json({ message: err })
				} else if (results.length === 0) {
					console.error('USER DOESNT EXIST');
					return res.status(404).json({ message: 'User Name Or Password Is Incorrect.' });
				} else {

					const isPassword = passwordHash.verify(Password, results[ 0 ].PasswordHash);

					if (!isPassword) {
						console.error('Password INCORRECT')
						return res.status(400).json({ message: 'User Name Or Password Is Incorrect.' });
					} else {

						let user;

						for (let i in results) {
							user = results[ i ];
						}

						const returnUser = {
							UserId: user.UserId,
							UserName: user.UserName,
							Email: user.Email
						}

						return res.status(200).json({ user: returnUser });
					}
				}
			});
		});
	}
}