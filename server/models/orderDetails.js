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
         allowNull: false
      },
      quantity: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      pricePerShoe: {
         type: DataTypes.DECIMAL(8, 2),
         allowNull: false
      }
   }, {
         tableName: 'OrderDetails',
         timestamps: true
      });
   OrderDetails.associate = function(models) {
      // associations can be defined here
      OrderDetails.hasMany(models.orders, { foreignKey: 'orderId' });
      OrderDetails.hasMany(models.shoes, { foreignKey: 'shoeId' });
   };
   return OrderDetails;
};