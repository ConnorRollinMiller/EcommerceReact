'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Reviews', {
         reviewId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
         userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: 'Users',
               key: 'userId'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
         },
         username: {
            type: Sequelize.STRING,
            allowNull: false
         },
         reviewText: {
            type: Sequelize.STRING,
            allowNull: false
         },
         rating: {
            type: Sequelize.INTEGER,
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
      return queryInterface.dropTable('Reviews');
   }
};