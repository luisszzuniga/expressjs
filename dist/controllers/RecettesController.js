"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recettesController = void 0;
const Image_1 = require("../models/Image");
const Recipe_1 = require("../models/Recipe");
const User_1 = require("../models/User");
const CrudController_1 = require("./CrudController");
class RecettesController extends CrudController_1.CrudController {
    async read(request, response) {
        response.send(await Recipe_1.Recipe.findOne({ where: { id: request.params.id, deleted_at: null }, include: [User_1.User, Image_1.Image] }));
    }
    ;
    async all(request, response) {
        response.send(await Recipe_1.Recipe.findAll({ where: { deleted_at: null } }));
    }
    async create(request, response) {
        await Recipe_1.Recipe.create(request.body)
            .then((newRecipe) => {
            response.send(newRecipe);
        })
            .catch((error) => {
            response.send(error);
        });
    }
    async update(request, response) {
        await Recipe_1.Recipe.update(request.body, { where: { id: request.params.id } })
            .then((result) => {
            response.send(result);
        })
            .catch((result) => {
            response.send(result);
        });
    }
    async delete(request, response) {
        await Recipe_1.Recipe.destroy({ where: { id: request.params.id } })
            .then(() => {
            response.send("OK");
        })
            .catch(() => {
            response.send("Error");
        });
    }
    async restore(request, response) {
        await Recipe_1.Recipe.restore({ where: { id: request.params.id } })
            .then(() => {
            response.send("OK");
        })
            .catch(() => {
            response.send("Error");
        });
    }
}
exports.recettesController = new RecettesController;
