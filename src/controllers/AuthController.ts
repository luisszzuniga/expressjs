import { Request, Response } from "express";
import { User } from "../models/User";
const md5 = require("md5");

class AuthController
{  
    async login(request: Request, response: Response)
    {
        const mail = request.body.mail;
        const password = request.body.password;

        const user = await User.findOne({ where: { mail: mail }, fields: ['mail', 'password'] });

        if (! user) {
            response.json({"error": "Adresse mail ou mot de passe incorrect."});
            return;
        }

        if (user.password === md5(password)) {
            response.json({"message": "Connexion réussie."});
            return;
        }

        response.json({"error": "Adresse mail ou mot de passe incorrect."});
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