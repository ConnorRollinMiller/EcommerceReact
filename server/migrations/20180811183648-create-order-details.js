'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('OrderDetails', {
         orderDetailId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
         },
         orderId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: 'Orders',
               key: 'orderId'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         },
         shoeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: 'Shoes',
               key: 'shoeId'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         },
         quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
         },
         pricePerShoe: {
            type: Sequelize.DECIMAL(8, 2),
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
      return queryInterface.dropTable('OrderDetails');
   }
};