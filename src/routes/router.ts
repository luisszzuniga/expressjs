var express = require('express');
var router = express.Router();

import { Request, Response } from 'express';

//Controllers
import { recettesController } from '../controllers/RecettesController';


//RECETTES
router.get("/recettes", (request: Request, response: Response) => {
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

export { router };