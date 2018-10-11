'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Users', {
         userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
         },
         username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
         },
         normalizedUsername: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
               isUppercase: { msg: 'NormalizedUsername must be all uppercase.' }
            }
         },
         passwordHashed: {
            type: Sequelize.STRING,
            allowNull: false
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
               isEmail: { msg: 'Must be a valid email address.' }
            }
         },
         normalizedEmail: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
               isEmail: { msg: 'Must be a valid email address.' },
               isUppercase: { msg: 'normalizedEmail must be all uppercase.' }
            }
         },
         role: {
            type: Sequelize.ENUM,
            allowNull: false,
            values: [ 'admin', 'user' ],
            defaultValue: 'user'
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
         },
         updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
         }
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Users');
   }
};