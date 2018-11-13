'use strict';
module.exports = (sequelize, DataTypes) => {
   const Reviews = sequelize.define('Reviews', {
      reviewId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      shoeId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'Shoes',
            key: 'shoeId'
         }
      },
      userId: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'Users',
            key: 'userId'
         }
      },
      reviewText: {
         type: DataTypes.STRING,
         allowNull: false
      },
      rating: {
         type: DataTypes.INTEGER,
         allowNull: false
      }
   }, {
         tableName: 'Reviews',
         timestamps: true
      });
   Reviews.associate = function(models) {
      // associations can be defined here
      // Reviews.hasOne(models.users);
      // Reviews.hasOne(models.shoes);
   };
   return Reviews;
};