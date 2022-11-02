var express = require('express');
var router = express.Router();

import { Request, Response } from 'express';
import * as Auth from '../middleware/authenticate';

//Controllers
import { recettesController } from '../controllers/RecettesController';
import { usersController } from '../controllers/UsersController';
import { coursesController } from '../controllers/CoursesController';
import { seasonsController } from '../controllers/SeasonsController';
import { imagesController } from '../controllers/ImagesController';


//RECETTES
router.get("/recettes", (Auth.authorize(['admin'])), (request: Request, response: Response) => {
    recettesController.all(request, response);
});
router.get("/recettes/get/:id", (request: Request, response: Response) => {
    recettesController.read(request, response);
});
router.post('/recettes', (request: Request, response: Response) => {
    recettesController.create(request, response);
})
router.put('/recettes/:id', (request: Request, response: Response) => {
    recettesController.update(request, response);
})
router.delete('/recettes/:id', (request: Request, response: Response) => {
    recettesController.delete(request, response);
})
router.post('/recettes/restore/:id', (request: Request, response: Response) => {
    recettesController.restore(request, response);
});
//FIN RECETTES

//USERS
router.get('/users', (request: Request, response: Response) => {
    usersController.all(request, response);
});
router.get('/users/get/:id', (request: Request, response: Response) => {
    usersController.read(request, response);
});
router.patch('/users/:id', (request: Request, response: Response) => {
    usersController.update(request, response);
})
//FIN USERS

//COURSES (TYPES DE PLAT)
router.get('/courses', (request: Request, response: Response) => {
    coursesController.all(request, response);
});
router.get('/courses/get/:id', (request: Request, response: Response) => {
    coursesController.read(request, response);
})
//FIN COURSES

//SAISONS
router.get('/seasons', (request: Request, response: Response) => {
    seasonsController.all(request, response);
})
router.get('/seasons/get/:id', (request: Request, response: Response) => {
    seasonsController.read(request, response);
})
//FIN SAISONS

//IMAGES
router.get('/images', (request: Request, response: Response) => {
    imagesController.all(request, response);
});
router.get('/images/get/:id', (request: Request, response: Response) => {
    imagesController.read(request, response);
})
//FIN IMAGES

export { router };