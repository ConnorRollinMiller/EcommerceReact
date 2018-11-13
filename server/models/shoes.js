'use strict';

module.exports = (sequelize, DataTypes) => {
   const Shoes = sequelize.define('Shoes', {
      shoeId: {
         type: DataTypes.INTEGER(11),
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      brand: {
         type: DataTypes.STRING,
         allowNull: false
      },
      model: {
         type: DataTypes.STRING,
         allowNull: false
      },
      colorway: {
         type: DataTypes.STRING,
         allowNull: false
      },
      price: {
         type: DataTypes.DECIMAL(8, 2),
         allowNull: false
      },
      featured: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
         defaultValue: null
      },
      imageFolderName: {
         type: DataTypes.STRING,
         allowNull: false
      }
   }, {
         tableName: 'Shoes',
         timestamps: true
      })
   Shoes.associate = (models) => {
      // associations can be defined here
      // Shoes.belongsTo(models.orderDetails);
      // Shoes.belongsTo(models.reviews);
   }
   return Shoes;
}