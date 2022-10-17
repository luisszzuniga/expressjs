import { Request, Response } from "express";
import { Image } from "../models/Image";
import { CrudController } from "./CrudController";

class ImagesController extends CrudController
{
    all(request: Request, response: Response)
    {
        Image.findAll()
            .then((images: Image[]) => {
                response.send(images);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer les images."});
            })
    };

    read(request: Request, response: Response)
    {
        Image.findByPk(request.params.id)
            .then((image: Image) => {
                response.send(image);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer l'image."})
            })
    }
}

export const imagesController = new ImagesController;