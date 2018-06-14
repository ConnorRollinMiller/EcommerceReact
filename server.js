const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const router = express.Router();
const app = express();
const PORT = process.env.port || 8080;

const ShoesController = require('./server/controllers/ShoeController');
const UsersController = require('./server/controllers/UserController');
const ReviewsController = require('./server/controllers/ReviewController');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/users', UsersController);
app.use('/api/shoes', ShoesController);
app.use('/api/reviews', ReviewsController)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));

	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`Server listening on port ${ PORT }`);
});