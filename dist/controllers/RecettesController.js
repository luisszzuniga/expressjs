"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recettesController = void 0;
const Image_1 = require("../models/Image");
const Ingredient_1 = require("../models/Ingredient");
const Recipe_1 = require("../models/Recipe");
const User_1 = require("../models/User");
const CrudController_1 = require("./CrudController");
class RecettesController extends CrudController_1.CrudController {
    read(request, response) {
        Recipe_1.Recipe.findOne({ where: { id: request.params.id, deleted_at: null }, include: [User_1.User, Image_1.Image, Ingredient_1.Ingredient] })
            .then((recipe) => {
            response.send(recipe);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer la recette." });
        });
    }
    ;
    all(request, response) {
        Recipe_1.Recipe.findAll({ where: { deleted_at: null } })
            .then((recipes) => {
            response.send(recipes);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible de récupérer les recettes." });
        });
    }
    create(request, response) {
        Recipe_1.Recipe.create(request.body)
            .then((newRecipe) => {
            response.send(newRecipe);
        })
            .catch((error) => {
            console.log(error);
            response.json({ "error": "Impossible d'ajouter la recette" });
        });
    }
    update(request, response) {
        Recipe_1.Recipe.update(request.body, { where: { id: request.params.id } })
            .then((result) => {
            response.send(result);
        })
            .catch((result) => {
            response.json({ "error": "Impossible de mettre à jour la recette." });
        });
    }
    delete(request, response) {
        Recipe_1.Recipe.destroy({ where: { id: request.params.id } })
            .then(() => {
            response.json({ "message": "Recette correctement supprimée." });
        })
            .catch(() => {
            response.json({ "error": "Impossible de supprimer la recette." });
        });
    }
    restore(request, response) {
        Recipe_1.Recipe.restore({ where: { id: request.params.id } })
            .then(() => {
            response.json({ "message": "Recette restaurée." });
        })
            .catch(() => {
            response.json({ "error": "La recette n'a pas pu être restaurée." });
        });
    }
    addIngredient(request, response) {
    }
}
exports.recettesController = new RecettesController;
