import { Request, Response } from "express";
import { generateToken } from "../authenticate/jwt";
import { Permission } from "../models/Permission";
import { User } from "../models/User";
const md5 = require("md5");

class AuthController
{  
    async login(request: Request, response: Response)
    {
        const mail = request.body.mail;
        const password = request.body.password;

        if (! mail || ! password) {
            response.json({"error": "Vous devez saisir un email et un mot de passe."});
            return;
        }

        const user = await User.findOne({ where: { mail: mail }, fields: ['mail', 'password'], include: [Permission] });

        if (! user) {
            response.json({"error": "Adresse mail ou mot de passe incorrect."});
            return;
        }

        if (! user.permission.role) {
            response.json({"error": "Votre compte n'a pas de role."});
            return;
        }

        if (user.password === md5(password)) {
            response.json({
                "message": "Connexion réussie.",
                "token": generateToken(user.id, user.firstname, user.permission.role)
            });
            return;
        }

        response.json({"error": "Adresse mail ou mot de passe incorrect."});
    }

    register(request: Request, response: Response)
    {
        let body = request.body;
        body.idPermission = 1;

        User.create(body)
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