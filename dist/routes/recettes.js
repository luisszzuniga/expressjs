"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recettesRouter = void 0;
var express = require('express');
var recettesRouter = express.Router();
exports.recettesRouter = recettesRouter;
recettesRouter.get("/", (request, response) => {
    let recettes;
    // db.getConnection().query('SELECT * FROM recipes', (error: Error, rows: any, fields: any) => {
    //     if (error) throw error;
    //     recettes = rows;
    //     response.send(recettes)
    // });
});
recettesRouter.get("/get/:id", (request, response) => {
    let recette;
    // db.getConnection().query('SELECT * FROM recipes WHERE id=' + request.params.id, (error: Error, rows: any, fields: any) => {
    //     if (error) throw error;
    //     recette = rows;
    //     response.send(recette)
    // });
});
