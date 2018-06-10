const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.port || 8080;

const Shoes = require('./controllers/ShoeController');
const Users = require('./controllers/UserController');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))

app.use('/users', Users);
app.use('/api', Shoes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));

	app.get('/*', function(req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`Server listening on port ${ PORT }`);
});