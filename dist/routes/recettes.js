"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recettesRouter = void 0;
var express = require('express');
var recettesRouter = express.Router();
exports.recettesRouter = recettesRouter;
const index_1 = require("../index");
recettesRouter.get("/", (request, response) => {
    let recettes;
    index_1.db.getConnection().query('SELECT * FROM recettes', (error, rows, fields) => {
        if (error)
            throw error;
        recettes = rows;
        response.send(recettes);
    });
});
recettesRouter.get("/get/:id", (request, response) => {
    let recette;
    index_1.db.getConnection().query('SELECT * FROM recettes WHERE id=' + request.params.id, (error, rows, fields) => {
        if (error)
            throw error;
        recette = rows;
        response.send(recette);
    });
});
