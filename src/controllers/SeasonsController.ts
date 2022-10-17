import { Request, Response } from "express";
import { Season } from "../models/Season";
import { CrudController } from "./CrudController";

class SeasonsController extends CrudController
{
    all(request: Request, response: Response)
    {
        Season.findAll()
            .then((seasons: Season[]) => {
                response.send(seasons);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"message": "Impossible de récupérer les saisons."});
            })
    };

    read(request: Request, response: Response)
    {
        Season.findByPk(request.params.id)
            .then((season: Season) => {
                response.send(season);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"message": "Impossible de récupérer la saison."});
            })
    }
}

export const seasonsController = new SeasonsController;