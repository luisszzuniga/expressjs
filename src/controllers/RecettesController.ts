import { Request, Response } from "express";
import { Image } from "../models/Image";
import { Recipe } from "../models/Recipe";
import { User } from "../models/User";
import { CrudController } from "./CrudController";

class RecettesController extends CrudController
{
    async read(request: Request, response: Response)
    {
        response.send(await Recipe.findOne({where: {id: request.params.id, deleted_at: null}, include: [User, Image]}));
    };

    async all(request: Request, response: Response)
    {
        response.send(await Recipe.findAll({where: {deleted_at: null}}));
    }

    async create(request: Request, response: Response)
    {
        await Recipe.create(request.body)
                    .then((newRecipe: Object) => {
                        response.send(newRecipe);
                    })
                    .catch((error: Error) => {
                        response.send(error)
                    });
    }

    async update(request: Request, response: Response)
    {
        await Recipe.update(request.body, {where: {id: request.params.id}})
                    .then((result: Number[]) => {
                        response.send(result);
                    })
                    .catch((result: Number[]) => {
                        response.send(result);
                    });
    }

    async delete(request: Request, response: Response)
    {
        await Recipe.destroy({where: {id: request.params.id}})
                    .then(() => {
                        response.send("OK");
                    })
                    .catch(() => {
                        response.send("Error");
                    });
    }

    async restore(request: Request, response: Response)
    {
        await Recipe.restore({where: {id: request.params.id}})
                    .then(() => {
                        response.send("OK");
                    })
                    .catch(() => {
                        response.send("Error");
                    });
    }
}

export const recettesController = new RecettesController;