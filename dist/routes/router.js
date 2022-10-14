"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require('express');
var router = express.Router();
exports.router = router;
//Controllers
const RecettesController_1 = require("../controllers/RecettesController");
const UsersController_1 = require("../controllers/UsersController");
const CoursesController_1 = require("../controllers/CoursesController");
const SeasonsController_1 = require("../controllers/SeasonsController");
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
//FIN RECETTES
//USERS
router.get('/users', (request, response) => {
    UsersController_1.usersController.all(request, response);
});
router.get('/users/get/:id', (request, response) => {
    UsersController_1.usersController.read(request, response);
});
//FIN USERS
//COURSES (TYPES DE PLAT)
router.get('/courses', (request, response) => {
    CoursesController_1.coursesController.all(request, response);
});
router.get('/courses/get/:id', (request, response) => {
    CoursesController_1.coursesController.read(request, response);
});
//FIN COURSES
//SAISONS
router.get('/seasons', (request, response) => {
    SeasonsController_1.seasonsController.all(request, response);
});
router.get('/seasons/get/:id', (request, response) => {
    SeasonsController_1.seasonsController.read(request, response);
});
