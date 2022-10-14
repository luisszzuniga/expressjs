const { Sequelize } = require('sequelize');
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from './constants';

//Connexion à la BDD
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql'
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export { sequelize };