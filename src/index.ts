require('dotenv').config();

import express from 'express';
import { Singleton } from './config/singleton';
import { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from './config/constants';

//Routing imports
import { recettesRouter } from './routes/recettes';

//Connexion à la BDD
let db = new Singleton(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
export { db };

//Initialisation de l'app
const app = express();
app.use(express.json());

//Routers
app.use('/recettes', recettesRouter);

//Port
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});