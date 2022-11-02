"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Imports
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const constants_1 = require("./config/constants");
const router_1 = require("./routes/router");
const auth_1 = require("./routes/auth");
//Initialisation de l'app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// console.log('TOKEN JWT : ' + generateToken());
//Routers
app.use('/api', router_1.router);
app.use('/auth', auth_1.auth);
//Port
app.listen(constants_1.PORT, () => {
    console.log("Server is listening on port " + constants_1.PORT);
});
//SSL PASSPHRASE: luis
