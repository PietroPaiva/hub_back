import { Prisma } from "../generated/prisma/client";
import { prisma } from "../database/database"

export const fichaPersonagemRepository = {
    findAll: (userId: number) => {
        return prisma.fichaPersonagem.findMany({ 
            where: {userId: userId},
            include: {
                 aptidoes: true,
                assimilacoes: true,
                caracteristica: true,
                descricao: true,
                determinacao: true,
                inventario: true,
                saude: true,
            }
         })
    },

    findById: (fichaId: number , userId: number) => {
        return prisma.fichaPersonagem.findFirst({ 
            where: {id: fichaId, userId: userId},
            include: {
                aptidoes: true,
                assimilacoes: true,
                caracteristica: true,
                descricao: true,
                determinacao: true,
                inventario: true,
                saude: true,
            }
        })
    },

    create: (
        userId: number, 
        aptidoes: Prisma.AptidoesCreateWithoutFichaInput, 
        assimilacoes: Prisma.AssimilacoesCreateWithoutFichaInput[],
        caracteristica: Prisma.CarcteristicaCreateWithoutFichaInput[],
        descricao: Prisma.DescricaoCreateWithoutFichaInput,
        determinacao: Prisma.DeterminacaoCreateWithoutFichaInput,
        inventario: Prisma.InventarioCreateWithoutFichaInput[],
        saude: Prisma.SaudeCreateWithoutFichaInput

    ) => {
        return prisma.fichaPersonagem.create({ 
            data: {
                userId, 
                aptidoes: {create: aptidoes},
                assimilacoes: {create: assimilacoes},
                caracteristica: {create: caracteristica},
                descricao: {create: descricao},
                determinacao: {create: determinacao},
                inventario: {create: inventario},
                saude: {create: saude}
            },
            include: {
                aptidoes: true,
                assimilacoes: true,
                caracteristica: true,
                descricao: true,
                determinacao: true,
                inventario: true,
                saude: true
            }
          })
    },

    delete: (fichaId: number, userId: number) => {
        return prisma.fichaPersonagem.deleteMany({ where: {id: fichaId, userId: userId}})
    }
}