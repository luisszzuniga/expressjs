import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
import { User } from "../models/User";
import { CrudController } from "./CrudController";
import { Ingredient } from "../models/Ingredient";
import { Image } from "../models/Image";

class UsersController extends CrudController {
    all(request: Request, response: Response)
    {
        User.findAll()
            .then((users: User[]) => {
                response.send(users);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"message": "Impossible de récupérer tous les utilisateurs."});
            })
    };

    read(request: Request, response: Response)
    {
        User.findByPk(request.params.id, {
            include: {
                model: Recipe,
                include: [
                    { model: Image },
                    { model: Ingredient }
                ]
            }
        })
            .then((user: User) => {
                response.send(user);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"message": "Impossible de trouver cet utilisateur."});
            })
    }

    update(request: Request, response: Response)
    {
        User.update(request.body, {where: {id: request.params.id}})
            .then(() => {
                response.json({"message": "Utilisateur mis à jour."});
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"message": "Impossible de mettre à jour l'utilisateur."});
            });
    }

    login(request: Request, response: Response)
    {

    }

    register(request: Request, response: Response)
    {
        User.create(request.body)
            .then((newUser: Object) => {
                response.send(newUser);
            })
            .catch((error: Error) => {
                console.log(error)
                response.json({"message": "Insertion impossible en BDD."})
            });
    }
}

export const usersController = new UsersController;