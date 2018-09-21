'use strict';
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Shoes', {
         shoeId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
         },
         brand: {
            type: Sequelize.STRING,
            allowNull: false
         },
         model: {
            type: Sequelize.STRING,
            allowNull: false
         },
         colorway: {
            type: Sequelize.STRING,
            allowNull: false
         },
         price: {
            type: Sequelize.DECIMAL(8, 2),
            allowNull: false
         },
         featured: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: null
         },
         imageFolderName: {
            type: Sequelize.STRING,
            allowNull: false
         },
         discount: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
         },
         updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
         }
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Shoes');
   }
};