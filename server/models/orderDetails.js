'use strict';
module.exports = (sequelize, DataTypes) => {
   const OrderDetails = sequelize.define('OrderDetails', {
      orderDetailId: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      orderId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'Orders',
            key: 'orderId'
         }
      },
      shoeId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'Shoes',
            key: 'shoeId'
         },
      },
      quantity: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
   }, {
         tableName: 'OrderDetails',
         timestamps: true
      });
   OrderDetails.associate = function(models) {
      // associations can be defined here
      // OrderDetails.hasMany(models.orders);
      // OrderDetails.hasMany(models.shoes);
   };
   return OrderDetails;
};