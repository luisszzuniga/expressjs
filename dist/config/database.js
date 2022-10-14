"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require('sequelize');
const constants_1 = require("./constants");
//Connexion à la BDD
const sequelize = new Sequelize(constants_1.DB_NAME, constants_1.DB_USER, constants_1.DB_PASSWORD, {
    host: constants_1.DB_HOST,
    dialect: 'mysql'
});
exports.sequelize = sequelize;
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
