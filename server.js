require('dotenv').config();
const compression = require('compression');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');

const app = express();
const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 8080;

const nodemailer = require('./server/nodemailer');

if (env === 'development') {
   const morgan = require('morgan');
   app.use(morgan('dev'));
}

app.use(compression());
app.use(helmet())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require('./server/db');
const routes = require('./server/routes');

app.use('/api', routes);

if (env === 'production') {
   app.use(express.static(path.join(__dirname, 'build')));
   app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });
}

// db.sequelize.sync()
//    .then(() => {
//       app.listen(PORT, () => {
//          console.log(`Server listening on port ${ PORT }`);
//       });
//    })
//    .catch(err => {
//       console.log(`ERROR Syncing DB: ${ err }`);
//    });

app.listen(PORT, () => {
   console.log(`Server listening on port ${ PORT }`);
});