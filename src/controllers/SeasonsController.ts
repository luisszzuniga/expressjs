import { Request, Response } from "express";
import { Season } from "../models/Season";
import { CrudController } from "./CrudController";

class SeasonsController extends CrudController
{
    async all(request: Request, response: Response)
    {
        response.send(await Season.findAll());
    };

    async read(request: Request, response: Response)
    {
        response.send(await Season.findByPk(request.params.id));
    }
}

export const seasonsController = new SeasonsController;