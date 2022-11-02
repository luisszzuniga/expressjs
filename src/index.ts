//Imports
require('dotenv').config();
import express from 'express';
import { generateToken } from './authenticate/jwt';
import { PORT } from './config/constants';
import { router } from './routes/router';
import { auth } from './routes/auth';


//Initialisation de l'app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// console.log('TOKEN JWT : ' + generateToken());

//Routers
app.use('/api', router);
app.use('/auth', auth);

//Port
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});

//SSL PASSPHRASE: luis