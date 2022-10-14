import { Request, Response } from "express";
import { Image } from "../models/Image";
import { CrudController } from "./CrudController";

class ImagesController extends CrudController
{
    async all(request: Request, response: Response)
    {
        response.send(await Image.findAll());
    };

    async read(request: Request, response: Response)
    {
        response.send(await Image.findByPk(request.params.id));
    }
}

export const imagesController = new ImagesController;