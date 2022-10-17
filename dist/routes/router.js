"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require('express');
var router = express.Router();
exports.router = router;
const Auth = __importStar(require("../middleware/authenticate"));
//Controllers
const RecettesController_1 = require("../controllers/RecettesController");
const UsersController_1 = require("../controllers/UsersController");
const CoursesController_1 = require("../controllers/CoursesController");
const SeasonsController_1 = require("../controllers/SeasonsController");
const ImagesController_1 = require("../controllers/ImagesController");
//RECETTES
router.get("/recettes", (Auth.authorize(['getRecipeList'])), (request, response) => {
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
router.post('/users', (request, response) => {
    UsersController_1.usersController.create(request, response);
});
router.patch('/users/:id', (request, response) => {
    UsersController_1.usersController.update(request, response);
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
//FIN SAISONS
//IMAGES
router.get('/images', (request, response) => {
    ImagesController_1.imagesController.all(request, response);
});
router.get('/images/get/:id', (request, response) => {
    ImagesController_1.imagesController.read(request, response);
});
