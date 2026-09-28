import { userService } from '../service/userService';
import { Request, Response } from 'express';

export const userController = {

    register: async (req: Request , res: Response) => {
        const email = req.body.email
        const senha = req.body.senha
        
       try {
        const dataUser = await userService.register(email, senha)
        res.json(dataUser)
       }

       catch (error) {
        const mensagem = error instanceof Error ? error.message : "Erro inesperado"
        res.status(400).json({ error: mensagem })
        }
    },

    login: async (req: Request, res:Response) => {
        const email = req.body.email
        const senha = req.body.senha
        
        try {
        const dataUser = await userService.login(email, senha)
        res.json(dataUser)
        }

       catch (error) {
        const mensagem = error instanceof Error ? error.message : "Erro inesperado"
        res.status(400).json({ error: mensagem })
        }        
    }
}