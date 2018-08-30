const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const db = {}

const sequelize = new Sequelize('ReactEcommerceApp', process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
   host: process.env.MYSQL_HOST,
   dialect: 'mysql',
   dialectOptions: { decimalNumbers: true },
   operatorsAliases: false,
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
   }
});

sequelize.authenticate()
   .then(() => {
      console.log('Connection has been established successfully.');
   })
   .catch(err => {
      console.error('Unable to connect to the database:', err);
   });

db.sequelize = sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize, Sequelize);
db.orders = require('./orders')(sequelize, Sequelize);
db.orderDetails = require('./orderDetails')(sequelize, Sequelize);
db.reviews = require('./reviews')(sequelize, Sequelize);
db.shoes = require('./shoes')(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
   if (db[ modelName ].associate) {
      db[ modelName ].associate(db);
   }
});

module.exports = db;