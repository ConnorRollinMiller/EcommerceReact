'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Shoes', [
         {
            brand: 'Adidas',
            model: 'NMD',
            colorway: 'Bape',
            price: 900.00,
            featured: true,
            imageFolderName: 'NMD-Bape',
            discount: 0
         },
         {
            brand: 'Adidas',
            model: 'Ultraboost',
            colorway: 'Miami Hurricanes',
            price: 1600.00,
            // featured: NULL,
            imageFolderName: 'Ultraboost-MiamiHurricanes',
            discount: 0
         },
         {
            brand: 'Adidas',
            model: 'Yeezy 350',
            colorway: 'Beluga',
            price: 420.00,
            featured: true,
            imageFolderName: 'Yeezy350-Beluga',
            discount: 0
         },
         {
            brand: 'Adidas',
            model: 'Yeezy 750',
            colorway: 'Triple Black',
            price: 1050.00,
            featured: true,
            imageFolderName: 'Yeezy750-tripleBlack',
            discount: 0
         },
         {
            brand: 'Jordan',
            model: 'Retro 3',
            colorway: 'Katrina',
            price: 290.00,
            featured: true,
            imageFolderName: 'Retro3-Katrina',
            discount: 0
         },
         {
            brand: 'Jordan',
            model: 'Retro 4',
            colorway: 'Carhartt x Eminem',
            price: 23750.00,
            // featured: NULL,
            imageFolderName: 'Retro4-CarharttxEminem',
            discount: 0
         },
         {
            brand: 'Jordan',
            model: 'Retro 5',
            colorway: 'Grape',
            price: 325.00,
            // featured: NULL,
            imageFolderName: 'Retro5-Grape',
            discount: 0
         },
         {
            brand: 'Jordan',
            model: 'Retro 11',
            colorway: 'Legend Blue',
            price: 345.00,
            // featured: NULL,
            imageFolderName: 'Retro11-LegendBlue',
            discount: 0
         },
         {
            brand: 'Jordan',
            model: 'Retro 12',
            colorway: 'OVO',
            price: 1145.00,
            // featured: NULL,
            imageFolderName: 'Retro12-OVO',
            discount: 0
         },
         {
            brand: 'Nike',
            model: 'HyperDunk',
            colorway: 'Marty McFly',
            price: 375.00,
            // featured: NULL,
            imageFolderName: 'Hyperdunk-MartyMcFly',
            discount: 0
         },
         {
            brand: 'Nike',
            model: 'Lebron 9',
            colorway: 'Reverse Lebronald Palmer',
            price: 5500.00,
            featured: true,
            imageFolderName: 'Lebron9-ReverseLebronaldPalmer',
            discount: 0
         },
         {
            brand: 'Nike',
            model: 'Yeezy 2',
            colorway: 'Red October',
            price: 6785.00,
            featured: true,
            imageFolderName: 'Yeezy2-RedOctober',
            discount: 0
         }
      ], {});
   },

   down: (queryInterface, Sequelize) => {
      //
      //   Add reverting commands here.
      //   Return a promise to correctly handle asynchronicity.

      //   Example:
      return queryInterface.bulkDelete('Shoes', null, {});

   }
};
