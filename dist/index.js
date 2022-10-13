"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const singleton_1 = require("./config/singleton");
const constants_1 = require("./config/constants");
//Routing imports
const recettes_1 = require("./routes/recettes");
//Connexion à la BDD
let db = new singleton_1.Singleton(constants_1.DB_HOST, constants_1.DB_USER, constants_1.DB_PASSWORD, constants_1.DB_NAME);
exports.db = db;
//Initialisation de l'app
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Routers
app.use('/recettes', recettes_1.recettesRouter);
//Port
app.listen(constants_1.PORT, () => {
    console.log("Server is listening on port " + constants_1.PORT);
});
