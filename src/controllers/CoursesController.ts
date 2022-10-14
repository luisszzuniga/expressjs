import { Request, Response } from "express";
import { Course } from "../models/Course";
import { CrudController } from "./CrudController";

class CoursesController extends CrudController
{
    async all(request: Request, response: Response)
    {
        response.send(await Course.findAll());
    };

    async read(request: Request, response: Response)
    {
        response.send(await Course.findByPk(request.params.id));
    }
}

export const coursesController = new CoursesController;