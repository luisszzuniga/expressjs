var express = require('express');
var recettesRouter = express.Router();

import { Request, Response } from 'express';
import { db } from '../index';

recettesRouter.get("/", (request: Request, response: Response) => {
    let recettes: any;

    db.getConnection().query('SELECT * FROM recettes', (error: Error, rows: any, fields: any) => {
        if (error) throw error;
        recettes = rows;
        response.send(recettes)
    });
});

recettesRouter.get("/get/:id", (request: Request, response: Response) => {
    let recette: any;

    db.getConnection().query('SELECT * FROM recettes WHERE id=' + request.params.id, (error: Error, rows: any, fields: any) => {
        if (error) throw error;
        recette = rows;
        response.send(recette)
    });
});

export { recettesRouter };