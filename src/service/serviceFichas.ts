import { Prisma } from "../generated/prisma/client"
import { fichaPersonagemRepository } from "../repository/ficha.repository"

export const fichaService = {
    findAll: async (userId: number) => {
        const sucess = await fichaPersonagemRepository.findAll(userId)
            return sucess
    },
    
    findByID: async (fichaId: number, userId: number) => {
        const sucess = await fichaPersonagemRepository.findById(fichaId, userId)
            return sucess
    },

    create: async (
        userId: number,
        aptidoes: Prisma.AptidoesCreateWithoutFichaInput,
        assimilacoes: Prisma.AssimilacoesCreateWithoutFichaInput[],
        caracteristica: Prisma.CarcteristicaCreateWithoutFichaInput[],
        descricao: Prisma.DescricaoCreateWithoutFichaInput,
        determinacao: Prisma.DeterminacaoCreateWithoutFichaInput,
        inventario: Prisma.InventarioCreateWithoutFichaInput[],
        saude: Prisma.SaudeCreateWithoutFichaInput
    ) => {
        const sucess = await fichaPersonagemRepository.create(
            userId, 
            aptidoes,
            assimilacoes,
            caracteristica,
            descricao,
            determinacao,
            inventario,
            saude
        )
        return sucess
    },

    delete: async (fichaId:number, userId: number) => {
        const sucess = await fichaPersonagemRepository.delete(fichaId, userId)
         return sucess
    }
}