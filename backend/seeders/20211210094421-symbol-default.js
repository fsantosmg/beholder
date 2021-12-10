'use strict';

const Sequelize = require("sequelize");
const {where} = require("sequelize");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const symbol = await queryInterface.rawSelect('symbols', {where: {}, limit: 1}, ['symbol']);
        if (!symbol) {


            return queryInterface.bulkInsert('symbols', [{
                symbol: 'BTCBUSD',
                basePrecision: 8,
                quotePrecision: 8,
                minNotional: '0.01',
                minLotSize: '0.01',
                isFavorite: true,

                createdAt: new Date(),
                updatedAt: new Date()

            }])
        }
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('symbols', null, {});
    }
};
