import { Request, Response } from "express";
import { Image } from "../models/Image";
import { Recipe } from "../models/Recipe";
import { User } from "../models/User";
import { CrudController } from "./CrudController";

class RecettesController extends CrudController
{
    read(request: Request, response: Response)
    {
        Recipe.findOne({where: {id: request.params.id, deleted_at: null}, include: [User, Image]})
            .then((recipe: Recipe) => {
                response.send(recipe);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer la recette."});
            })
    };

    all(request: Request, response: Response)
    {
        Recipe.findAll({where: {deleted_at: null}})
            .then((recipes: Recipe[]) => {
                response.send(recipes);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer les recettes."});
            })
    }

    create(request: Request, response: Response)
    {
        Recipe.create(request.body)
            .then((newRecipe: Recipe) => {
                response.send(newRecipe);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible d'ajouter la recette"});
            });
    }

    update(request: Request, response: Response)
    {
        Recipe.update(request.body, {where: {id: request.params.id}})
            .then((result: Number[]) => {
                response.send(result);
            })
            .catch((result: Number[]) => {
                response.json({"error": "Impossible de mettre à jour la recette."});
            });
    }

    delete(request: Request, response: Response)
    {
        Recipe.destroy({where: {id: request.params.id}})
            .then(() => {
                response.json({"message": "Recette correctement supprimée."});
            })
            .catch(() => {
                response.json({"error": "Impossible de supprimer la recette."});
            });
    }

    restore(request: Request, response: Response)
    {
        Recipe.restore({where: {id: request.params.id}})
            .then(() => {
                response.json({"message": "Recette restaurée."});
            })
            .catch(() => {
                response.json({"error": "La recette n'a pas pu être restaurée."});
            });
    }
}

export const recettesController = new RecettesController;