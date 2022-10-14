"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require('express');
var router = express.Router();
exports.router = router;
//Controllers
const RecettesController_1 = require("../controllers/RecettesController");
//RECETTES
router.get("/recettes", (request, response) => {
    RecettesController_1.recettesController.all(request, response);
});
router.get("/recettes/get/:id", (request, response) => {
    RecettesController_1.recettesController.read(request, response);
});
router.post('/recettes', (request, response) => {
    RecettesController_1.recettesController.create(request, response);
});
router.put('/recettes/:id', (request, response) => {
    RecettesController_1.recettesController.update(request, response);
});
router.delete('/recettes/:id', (request, response) => {
    RecettesController_1.recettesController.delete(request, response);
});
router.post('/recettes/restore/:id', (request, response) => {
    RecettesController_1.recettesController.restore(request, response);
});
