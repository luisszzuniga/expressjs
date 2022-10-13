"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
const MySQL = require('mysql');
class Singleton {
    constructor(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) {
        this.connection = MySQL.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });
        this.connection.connect();
    }
    getConnection() {
        return this.connection;
    }
    closeConnexion() {
        this.connection.end();
    }
}
exports.Singleton = Singleton;
