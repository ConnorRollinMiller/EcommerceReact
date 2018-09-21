'use strict';

module.exports = (sequelize, DataTypes) => {
   const Orders = sequelize.define('Orders', {
      orderId: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      userId: {
         type: DataTypes.INTEGER,
         references: {
            model: 'Users',
            key: 'userId'
         },
         allowNull: true
      },
      firstName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false
      },
      country: {
         type: DataTypes.STRING,
         allowNull: false,
         defaultValue: 'USA'
      },
      state: {
         type: DataTypes.STRING,
         allowNull: false
      },
      city: {
         type: DataTypes.STRING,
         allowNull: false
      },
      address: {
         type: DataTypes.STRING,
         allowNull: false
      },
      zipCode: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      phone: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            min: { args: 10, msg: 'Phone Number must be atleast 10 digits.' }
         }
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: { msg: 'Must provide valid email address.' }
         }
      },
      total: {
         type: DataTypes.DECIMAL(8, 2),
         allowNull: false
      }
   }, {
         tableName: 'Orders',
         timestamps: true
      });
   Orders.associate = function(models) {
      // associations can be defined here
      // Orders.hasMany(models.users, { foreignKey: 'userId' });

      // Orders.belongsTo(models.orderDetails, { foreignKey: 'orderDetailsId' });
   };
   return Orders;
};