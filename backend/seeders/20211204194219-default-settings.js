'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const {encrypt} = require('../src/utils/crypto');

//setar os dados para que a migration seja executada
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('settings',[{
      email: '<SEU EMAIL>',
      password: bcrypt.hashSync('<SUA SENHA>'),
      apiUrl: 'https://testnet.binance.vision/api',
      streamUrl: 'wss://testnet.binance.vision/ws',
      accessKey: '<SUA ACCESS KEY>',
      secretKey: encrypt('<SUA SECRET KEY>'),
      createdAt: new Date(),
      updatedAt: new Date()

    }])

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('settings', null, {});
  }
};
