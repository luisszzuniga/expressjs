import { Request, Response } from "express";
import { Recipe } from "../models/Recipe";
import { User } from "../models/User";
import { CrudController } from "./CrudController";

class UsersController extends CrudController
{
    async all(request: Request, response: Response)
    {
        response.send(await User.findAll());
    };

    async read(request: Request, response: Response)
    {
        response.send(await User.findByPk(request.params.id, {include: Recipe}));
    }
}

export const usersController = new UsersController;