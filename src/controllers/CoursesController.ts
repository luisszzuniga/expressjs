import { Request, Response } from "express";
import { Course } from "../models/Course";
import { CrudController } from "./CrudController";

class CoursesController extends CrudController
{
    all(request: Request, response: Response)
    {
        Course.findAll()
            .then((courses: Course[]) => {
                response.send(courses);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer les types de plats."});
            })
    };

    read(request: Request, response: Response)
    {
        Course.findByPk(request.params.id)
            .then((course: Course) => {
                response.send(course);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"error": "Impossible de récupérer le type de plat."});
            })
    }
}

export const coursesController = new CoursesController;