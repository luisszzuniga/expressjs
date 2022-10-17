import { Request, Response } from "express";
import { User } from "../models/User";

class AuthController
{  
    login(request: Request, response: Response)
    {

    }

    register(request: Request, response: Response)
    {
        User.create(request.body)
            .then((newUser: User) => {
                response.send(newUser);
            })
            .catch((error: Error) => {
                console.log(error);
                response.json({"message": "Impossible de créér le compte."});
            });
    }
}

export const authController = new AuthController;