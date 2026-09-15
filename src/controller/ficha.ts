import { fichaService } from '../service/serviceFichas';
import { Request, Response } from 'express';

export const fichaController = {
    findAll: async (req: Request, res: Response) => {
        const userId = Number(req.body.userId)
        const fichas = await fichaService.findAll(userId)
        res.json(fichas)
    },

    findById: async (req: Request, res: Response) => {
        const userId = Number(req.body.userId)
        const fichaId = Number(req.params.id)
        const fichas = await fichaService.findByID(fichaId, userId)  
        res.json(fichas)      
    },

    create: async (req: Request, res: Response) => {
        const userId = Number(req.body.userId) 
        const aptidoes = req.body.aptidoes
        const assimilacoes = req.body.assimilacoes
        const caracteristica = req.body.caracteristica
        const descricao = req.body.descricao
        const determinacao = req.body.determinacao
        const inventario = req.body.inventario
        const saude = req.body.saude

        const fichas = await fichaService.create(userId, aptidoes, assimilacoes, caracteristica, descricao, determinacao, inventario, saude)
        res.json(fichas)

    },

    update: async (req: Request, res: Response) => {
        const fichaId = Number(req.params.id)
        const userId = Number(req.body.userId)
        const aptidoes = req.body.aptidoes
        const assimilacoes = req.body.assimilacoes
        const caracteristica = req.body.caracteristica
        const descricao = req.body.descricao
        const determinacao = req.body.determinacao
        const inventario = req.body.inventario
        const saude = req.body.saude

        const fichas = await fichaService.update(fichaId, userId,  aptidoes, assimilacoes, caracteristica, descricao, determinacao, inventario, saude)
        res.json(fichas)
    },
    
    delete: async (req: Request, res: Response) => {
        const fichaId = Number(req.params.id)
        const userId = Number(req.body.userId)

        const fichas = await fichaService.delete(fichaId, userId)
        res.json(fichas)

    }

}