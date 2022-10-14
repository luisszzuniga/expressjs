//Imports
require('dotenv').config();
import express from 'express';
import { generateToken } from './authenticate/jwt';
import { PORT } from './config/constants';
import { router } from './routes/router';


//Initialisation de l'app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

console.log('TOKEN JWT : ' + generateToken());

//Router
app.use('/api', router);

//Port
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});

//SSL PASSPHRASE: luis