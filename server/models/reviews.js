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
         allowNull: false
      },
      userId: {
         type: DataTypes.INTEGER,
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
      // Reviews.hasMany(models.users, { foreignKey: 'userId' });
      // Reviews.hasMany(models.shoes, { foreignKey: 'shoeId' });
   };
   return Reviews;
};