'use strict';

module.exports = (sequelize, DataTypes) => {
   const Users = sequelize.define('Users', {
      userId: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      normalizedUsername: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isUppercase: { msg: 'NormalizedUsername must be all uppercase.' }
         }
      },
      passwordHashed: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: {
               msg: 'Must be a valid email address.'
            }
         }
      },
      normalizedEmail: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: { msg: 'Must be a valid email address.' },
            isUppercase: { msg: 'normalizedEmail must be all uppercase.' }
         }
      },
      role: {
         type: DataTypes.ENUM,
         allowNull: false,
         values: [ 'admin', 'user' ],
         defaultValue: 'user'
      }
   }, {
         tableName: 'Users',
         timestamps: true
      });

   Users.associate = (models) => {
      // associations can be defined here
      // Users.belongsTo(models.orders);
      // Users.belongsTo(models.reviews);
   };
   return Users;
};