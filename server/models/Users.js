const connection = require('../db');
const passwordHash = require('password-hash');

module.exports = {
	doesUserExist: async (req, res, next) => {
		const { UserName } = req.body;

		console.log(req.body);

		const queryString = 'SELECT * FROM `Users` WHERE `NormalizedUserName` = ?';

		connection.query(queryString, [ UserName.toUpperCase() ], (err, results) => {
			if (err) {
				console.log(err);
				return res.status(400).json({ message: err })
			} else if (results.length > 0) {
				console.log('USER EXISTS:', results);
				return res.status(400).json({ message: 'User Already Exists.' });
			}

			next();
		});
	},

	passwordIsHashed: (req, res, next) => {

		let { Password } = req.body;

		const hashed = passwordHash.generate(Password);
		const isPasswordHashed = passwordHash.isHashed(hashed)

		if (!isPasswordHashed) return res.status(400).json({ message: `Hash Wasn't Verified` });

		req.body = { ...req.body, PasswordHash: hashed };

		next();
	},

	userRegister: (req, res) => {

		const { UserName, Email, PasswordHash } = req.body;

		if (UserName === '') {
			console.error('NO UserName PROVIDED.');
			return res.status(400).json({ message: 'No UserName Provided.' });
		} else if (Email === '') {
			console.error('NO Email PROVIDED.');
			return res.status(400).json({ message: 'No Email Provided.' });
		} else if (PasswordHash === '') {
			console.error('NO PasswordHash Provided.');
			return res.status(400).json({ message: 'No PasswordHash Provided.' });
		}

		const newUser = {
			UserName: UserName.trim(),
			NormalizedUserName: UserName.trim().toUpperCase(),
			Email: Email.trim(),
			PasswordHash: PasswordHash
		};

		const queryString = 'INSERT INTO Users SET ?';
		connection.query(queryString, newUser, (err, results) => { // err, results, fields
			if (err) {
				console.error(`ERROR: ${ err }`);
				return res.status(400).json({ message: err });
			}
			console.log('REGISTER SUCCESS:', results);
			res.status(200).json({ message: 'Registeration was successful!' });
		});
	},

	userLogin: (req, res) => {
		const { UserName, Password } = req.body;

		console.error(UserName.toUpperCase(), Password);

		const queryString = 'SELECT * FROM `Users` WHERE `NormalizedUserName` = ?';

		connection.query(queryString, [ UserName.toUpperCase() ], (err, results) => {

			var isPassword = passwordHash.verify(Password, results[ 0 ].PasswordHash);
			console.error(isPassword);

			if (err) {
				console.error(err);
				return res.status(400).json({ message: err })
			} else if (results.length === 0) {
				console.error('USER DOESNT EXIST');
				return res.status(404).json({ message: 'User Name Or Password Is Incorrect.' });
			} else {
				if (!isPassword) {
					console.error('Password INCORRECT')
					return res.status(400).json({ message: 'User Name Or Password Is Incorrect.' });
				} else {
					res.status(200).json({ user: results })
				}
			}
		});
	}
}