'use strict';

const sequelize = require("../src/db");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn("settings", "streamUrl", {
            type: Sequelize.STRING
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("settings", "streamUrl")
    }
};
