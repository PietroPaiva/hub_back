import { Prisma } from "../generated/prisma/client";
import { prisma } from "../database/database"

export const fichaPersonagemRepository = {
    findAll: (userId: number) => {
        return prisma.fichaPersonagem.findMany({ 
            where: {userId: userId},
            include: {
                 aptidoes: {
                    include: {
                    instintos: true,
                    conhecimentos: true,
                    praticas: true
                    }
                 },
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
                aptidoes: {
                    include: {
                    instintos: true,
                    conhecimentos: true,
                    praticas: true
                    }
                 },
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
    aptidoes: {
        instintos: Prisma.InstintosCreateWithoutAptidoesInput,
        conhecimentos: Prisma.ConhecimentosCreateWithoutAptidoesInput,
        praticas: Prisma.PraticasCreateWithoutAptidoesInput
    },
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
            aptidoes: {
                create: {
                    instintos: { create: aptidoes.instintos },
                    conhecimentos: { create: aptidoes.conhecimentos },
                    praticas: { create: aptidoes.praticas },
                }
            },
            assimilacoes: { create: assimilacoes },
            caracteristica: { create: caracteristica },
            descricao: { create: descricao },
            determinacao: { create: determinacao },
            inventario: { create: inventario },
            saude: { create: saude }
        },
        include: {
            aptidoes: { include: { instintos: true, conhecimentos: true, praticas: true } },
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
    },

    update: (
    fichaId: number,
    aptidoes: {
        instintos: Prisma.InstintosUpdateWithoutAptidoesInput,
        conhecimentos: Prisma.ConhecimentosUpdateWithoutAptidoesInput,
        praticas: Prisma.PraticasUpdateWithoutAptidoesInput
    },
    assimilacoes: Prisma.AssimilacoesCreateWithoutFichaInput[],
    caracteristica: Prisma.CarcteristicaCreateWithoutFichaInput[],
    descricao: Prisma.DescricaoUpdateWithoutFichaInput,
    determinacao: Prisma.DeterminacaoUpdateWithoutFichaInput,
    inventario: Prisma.InventarioCreateWithoutFichaInput[],
    saude: Prisma.SaudeUpdateWithoutFichaInput
    ) => {
    return prisma.fichaPersonagem.update({
        where: { id: fichaId },
        data: {
            aptidoes: {
                update: {
                    instintos: { update: aptidoes.instintos },
                    conhecimentos: { update: aptidoes.conhecimentos },
                    praticas: { update: aptidoes.praticas },
                }
            },
            descricao: { update: descricao },
            determinacao: { update: determinacao },
            saude: { update: saude },
            assimilacoes: { deleteMany: {}, create: assimilacoes },
            caracteristica: { deleteMany: {}, create: caracteristica },
            inventario: { deleteMany: {}, create: inventario },
        },
        include: {
            aptidoes: { include: { instintos: true, conhecimentos: true, praticas: true } },
            assimilacoes: true,
            caracteristica: true,
            descricao: true,
            determinacao: true,
            inventario: true,
            saude: true
        }
        })
    }



}
