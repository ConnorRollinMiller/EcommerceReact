require('dotenv').config();
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');

const PORT = process.env.port || 8080;

const app = express();

const JwtController = require('./server/controllers/JwtController');
const ShoesController = require('./server/controllers/ShoeController');
const UsersController = require('./server/controllers/UserController');
const ReviewsController = require('./server/controllers/ReviewController');
const OrdersController = require('./server/controllers/OrdersController');

app.use(compression())
app.use(helmet())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api/jwt', JwtController);
app.use('/api/users', UsersController);
app.use('/api/shoes', ShoesController);
app.use('/api/reviews', ReviewsController);
app.use('/api/orders', OrdersController);

if (process.env.NODE_ENV !== 'production') {
   app.use(express.static(path.join(__dirname, 'build')));

   app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });
}

app.listen(PORT, () => {
   console.log(`Server listening on port ${ PORT }`);
});
