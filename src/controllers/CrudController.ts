import { Request, Response } from "express";

abstract class CrudController
{
    create(request: Request, response: Response): void
    {
        throw new Error("Method create not implemented");
    };
    read(request: Request, response: Response): void
    {
        throw new Error("Method read not implemented");
    };
    update(request: Request, response: Response): void
    {
        throw new Error("Method update not implemented");
    };
    delete(request: Request, response: Response): void
    {
        throw new Error("Method delete not implemented");
    };
    all(request: Request, response: Response): void
    {
        throw new Error("Method all not implemented");
    }
}

export { CrudController };