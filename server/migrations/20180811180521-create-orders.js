'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Orders', {
         orderId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
         },
         userId: {
            type: Sequelize.INTEGER,
            references: {
               model: 'Users',
               key: 'userId'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         },
         firstName: {
            type: Sequelize.STRING,
            allowNull: false
         },
         lastName: {
            type: Sequelize.STRING,
            allowNull: false
         },
         country: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'USA'
         },
         state: {
            type: Sequelize.STRING,
            allowNull: false
         },
         city: {
            type: Sequelize.STRING,
            allowNull: false
         },
         address: {
            type: Sequelize.STRING,
            allowNull: false
         },
         zipCode: {
            type: Sequelize.INTEGER,
            allowNull: false
         },
         phone: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
               min: { args: 10, msg: 'Phone Number must be atleast 10 digits.' }
            }
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
               isEmail: { msg: 'Must provide valid email address.' }
            }
         },
         total: {
            type: Sequelize.DECIMAL(8, 2),
            allowNull: false
         },
         status: {
            type: Sequelize.ENUM,
            values: [ 'Pending', 'Cancelled', 'Returned', 'Complete' ],
            defaultValue: 'Pending',
            allowNull: false
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
      return queryInterface.dropTable('Orders');
   }
};