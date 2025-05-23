require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        hostname: process.env.DB_HOST,
        port: process.env.DB_PORT,

        dialect: 'mysql',
        logging: true

    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        hostname: process.env.DB_HOST,
        port: process.env.DB_PORT,

        dialect: 'mysql',
        logging: true
    },
    production: {username: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        hostname: process.env.DB_HOST,
        port: process.env.DB_PORT,

        dialect: 'mysql',
        logging: false}
}