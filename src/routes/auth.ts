var express = require('express');
var auth = express.Router();

import { Request, Response } from 'express';
import * as Auth from '../middleware/authenticate';

//Controllers
import { authController } from '../controllers/AuthController';


auth.post("/login", (request: Request, response: Response) => {
    authController.login(request, response);
})
auth.post("/register", (request: Request, response: Response) => {
    authController.register(request, response);
})

export { auth };