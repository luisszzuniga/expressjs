const MySQL = require('mysql');

class Singleton
{
    private connection;

    constructor(DB_HOST: String, DB_USER: String, DB_PASSWORD: String, DB_NAME: String) {
        this.connection = MySQL.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });

        this.connection.connect();
    }

    getConnection()
    {
        return this.connection;
    }

    closeConnexion()
    {
        this.connection.end();
    }
}

export { Singleton }